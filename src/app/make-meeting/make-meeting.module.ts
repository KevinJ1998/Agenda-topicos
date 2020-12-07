import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MakeMeetingPageRoutingModule } from './make-meeting-routing.module';

import { MakeMeetingPage } from './make-meeting.page';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    MakeMeetingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ MakeMeetingPage ]
} )
export class MakeMeetingPageModule {
}
