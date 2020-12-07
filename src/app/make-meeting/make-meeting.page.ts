import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../shared/meeting.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component( {
  selector: 'app-make-meeting',
  templateUrl: './make-meeting.page.html',
  styleUrls: [ './make-meeting.page.scss' ],
} )
export class MakeMeetingPage implements OnInit {

  meetingForm: FormGroup;
  makingMeeting: boolean;
  minDate: string = new Date().toISOString();
  maxDate: string = new Date().toISOString();

  constructor( private mtService: MeetingService, private router: Router, public fb: FormBuilder ) { }

  ngOnInit() {
    this.meetingForm = this.fb.group( {
      name: [ '' ],
      lastName: [ '' ],
      address: [ '' ],
      email: [ '' ],
      phone: [ '' ],
      description: [ '' ],
      date: [ new Date().toISOString() ]
    } );
  }

  formSubmit() {
    if ( !this.meetingForm.valid ) {
      return false;
    } else {
      this.makingMeeting = true;
      setTimeout( () => {
        this.mtService.createMeeting( this.meetingForm.value ).then( res => {
          console.log( res );
          this.meetingForm.reset();
          this.router.navigate( [ '/home' ] );
        } ).catch( error => console.log( error ) );
        this.makingMeeting = false;
      }, 2000 );
    }
  }


}
