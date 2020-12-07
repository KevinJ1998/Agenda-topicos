import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingService } from '../shared/meeting.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component( {
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.page.html',
  styleUrls: [ './edit-meeting.page.scss' ],
} )
export class EditMeetingPage implements OnInit {

  getKey: any;
  meetingEditForm: FormGroup;
  meetingData: any;
  minDate: string = new Date().toISOString();
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private mtService: MeetingService,
    private router: Router,
    public fb: FormBuilder,
    public alertCtrl: AlertController ) {
    this.getKey = this.route.snapshot.paramMap.get( 'key' );
    this.loading = true;
    this.mtService.getMeeting( this.getKey ).valueChanges().subscribe( ( meetingData ) => {
      console.log( 'meetingSnap', meetingData );
      this.meetingEditForm = this.fb.group( {
        name: [ meetingData.name ],
        lastName: [ meetingData.lastName ],
        phone: [ meetingData.phone ],
        email: [ meetingData.email ],
        description: [ meetingData.description ],
        address: [ meetingData.address ],
        date: [ meetingData.date ]
      } );
      this.loading = false;
    } );
  }

  ngOnInit() {
    console.log( 'getValue', JSON.stringify( this.meetingData ) );
    this.meetingEditForm = new FormGroup( {
      name: new FormControl( '', [ Validators.required ] ),
      lastName: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      description: new FormControl(),
      email: new FormControl( '', [ Validators.email ] ),
      date: new FormControl()
    } );
  }

  // ionViewDidLeave() {
  //   console.log( 'algo' );
  // }

  formSubmit() {
    if ( !this.meetingEditForm.valid ) {
      return false;
    } else {
      this.mtService.updateMeeting( this.getKey, this.meetingEditForm.value ).then( res => {
        console.log( res );
        this.meetingEditForm.reset();
        this.router.navigate( [ '/home' ] );
      } )
        .catch( error => console.log( error ) );
    }
  }

  async deleteMeeting() {
    const alert = await this.alertCtrl.create( {
      header: 'Confirmar',
      message: '¿Seguro quieres eliminar esta cita?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si',
          handler: () => {
            this.mtService.deleteMeeting( this.getKey );
            this.router.navigate( [ '/home' ] );
          }
        }
      ]
    } );
    await alert.present();
  }

  //   if ( window.confirm( '¿Seguro quieres eliminar esta cita?' ) ) {
  //     this.mtService.deleteMeeting( this.getKey );
  //     this.router.navigate( [ '/home' ] );
  //   }
  // }

}
