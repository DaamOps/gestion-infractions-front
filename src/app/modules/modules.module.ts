import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfractionComponent} from "./infraction/infraction.component";
import {UserComponent} from "./user/user.component";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {InfractionAddComponent} from "./infraction/infraction-add/infraction-add.component";
import {InfractionListComponent} from "./infraction/infraction-list/infraction-list.component";
import {InfractionShowComponent} from "./infraction/infraction-show/infraction-show.component";
import {ModulesRoutingModule} from "./modules-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {InfractionsResolver} from "./infraction/infractions.resolver";
import { UserShowComponent } from './user/user-show/user-show.component';
import {UserListComponent} from "./user/user-list/user-list.component";


@NgModule({
  declarations: [
    InfractionComponent,
    UserComponent,
    UserListComponent,
    UserShowComponent,
    UserAddComponent,
    InfractionAddComponent,
    InfractionListComponent,
    InfractionShowComponent,
  ],
    imports: [
        CommonModule,
        ModulesRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbNavModule
    ],
  providers: [
    InfractionsResolver
  ]
})
export class ModulesModule { }
