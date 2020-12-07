import { Injectable } from '@angular/core';
import { Meeting } from './meeting';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable( {
  providedIn: 'root'
} )
export class MeetingService {

  bookingListRef: AngularFireList<any>;
  dataBaseRef: AngularFireObject<any>;

  constructor( private db: AngularFireDatabase ) {
    console.log( 'this.bookingListRef', this.bookingListRef );
  }

  createMeeting( mt: Meeting ) {
    return this.bookingListRef.push( {
      name: mt.name,
      lastName: mt.lastName,
      address: mt.address,
      phone: mt.phone,
      description: mt.description,
      date: mt.date,
      email: mt.email
    } );
  }

  getMeetingsList() {
    this.bookingListRef = this.db.list( '/meeting' );
    return this.bookingListRef;
  }

  getMeeting( id: string ) {
    this.dataBaseRef = this.db.object( '/meeting/' + id );
    return this.dataBaseRef;
  }

  updateMeeting( id: string, mt: Meeting ) {
    return this.dataBaseRef.update( {
      name: mt.name,
      lastName: mt.lastName,
      address: mt.address,
      phone: mt.phone,
      description: mt.description,
      date: mt.date,
      email: mt.email
    } );
  }

  deleteMeeting( id: string ) {
    this.dataBaseRef = this.db.object( '/meeting/' + id );
    this.dataBaseRef.remove();
  }
}
