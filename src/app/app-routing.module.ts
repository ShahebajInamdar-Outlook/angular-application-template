import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SessionExpiredComponent } from './core/components/session-expired/session-expired.component';
import { UnAuthorisedComponent } from './core/components/un-authorised/un-authorised.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'session-expired',
    component: SessionExpiredComponent
  },
  {
    path: 'un-authorised',
    component: UnAuthorisedComponent
  }
  , {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  , {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
