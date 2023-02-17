import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'parametres',
        canActivate: [AuthGuard],
        loadChildren: () => import('../modules/modules.module').then( m => m.ModulesModule)
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
