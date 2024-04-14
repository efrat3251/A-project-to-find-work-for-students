import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Business } from 'moudels/Business';
import { BusinessComponent } from './componenta/business/business.component';

const routes: Routes = [{path:"home",component: BusinessComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
