import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/authentication/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  toggle: boolean = false;
  user: any;
  role: String = "ROLE_USER";
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }


  logout() {
    this.authSrv.logout();
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser')!;
    this.user = JSON.parse(currentUser);
    this.role = this.user?.role.libelle;
  }
}
