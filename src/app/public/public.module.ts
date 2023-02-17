import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import { ContraventionComponent } from './contravention/contravention.component';
import { DelitComponent } from './delit/delit.component';
import { CrimeComponent } from './crime/crime.component';
import {PublicRoutingModule} from "./public-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    ContraventionComponent,
    DelitComponent,
    CrimeComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
