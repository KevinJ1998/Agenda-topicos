import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../shared/meeting.service';
import { Meeting } from '../shared/meeting';
import { NavController } from '@ionic/angular';

@Component( {
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: [ 'home.page.scss' ],
} )
export class HomePage implements OnInit {
  Meetings = [];
  loadingData: boolean;

  constructor( private mtService: MeetingService, private navCtrl: NavController ) {}

  ngOnInit() {
    this.fetchMeetings();
    const meetingRes = this.mtService.getMeetingsList();
    meetingRes.snapshotChanges().subscribe( res => {
      this.loadingData = true;
      this.Meetings = [];
      res.forEach( item => {
        const a = item.payload.toJSON();
        a[ '$key' ] = item.key;
        this.Meetings.push( a as Meeting );
      } );
      this.loadingData = false;
    } );
  }

  fetchMeetings() {
    this.mtService.getMeetingsList().valueChanges().subscribe( res => {
      console.log( res );
    } );
  }

  goToEditMeeting( item ) {
    console.log( 'item', item );
    this.navCtrl.navigateForward( [ 'edit-meeting', { key: item[ '$key' ] } ] );
  }

}
