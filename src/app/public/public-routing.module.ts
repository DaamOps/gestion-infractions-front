import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ContraventionComponent} from "./contravention/contravention.component";
import {DelitComponent} from "./delit/delit.component";
import {CrimeComponent} from "./crime/crime.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'contravention',
    component: ContraventionComponent
  },
  {
    path: 'delit',
    component: DelitComponent
  },
  {
    path: 'crime',
    component: CrimeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
