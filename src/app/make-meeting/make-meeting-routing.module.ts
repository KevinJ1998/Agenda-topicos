import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeMeetingPage } from './make-meeting.page';

const routes: Routes = [
  {
    path: '',
    component: MakeMeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeMeetingPageRoutingModule {}
