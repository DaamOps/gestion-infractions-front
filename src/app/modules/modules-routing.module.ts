import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfractionComponent} from "./infraction/infraction.component";
import {InfractionListComponent} from "./infraction/infraction-list/infraction-list.component";
import {InfractionAddComponent} from "./infraction/infraction-add/infraction-add.component";
import {InfractionShowComponent} from "./infraction/infraction-show/infraction-show.component";
import {InfractionsResolver} from "./infraction/infractions.resolver";
import {UserComponent} from "./user/user.component";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserShowComponent} from "./user/user-show/user-show.component";

const routes: Routes = [
  {
    path: 'infractions', // child route path
    component: InfractionComponent, // child route component that the router renders
    children: [
      {
        path: '',
        component: InfractionListComponent
      },
      {
        path: 'add',
        component: InfractionAddComponent,
      },
      {
        path: ':id',
        component: InfractionShowComponent,
      }
    ],
  },
  {
    path: 'users', // child route path
    component: UserComponent, // child route component that the router renders
    children: [
      {
        path: 'list/:profil',
        component: UserListComponent,
      },
      {
        path: 'add',
        component: UserAddComponent,
      },
      {
        path: ':id',
        component: UserShowComponent,
      }
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
