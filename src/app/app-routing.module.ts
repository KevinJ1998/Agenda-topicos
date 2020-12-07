import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'make-meeting',
    loadChildren: () => import('./make-meeting/make-meeting.module').then( m => m.MakeMeetingPageModule)
  },
  {
    path: 'edit-meeting',
    loadChildren: () => import('./edit-meeting/edit-meeting.module').then( m => m.EditMeetingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
