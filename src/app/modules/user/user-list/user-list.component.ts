import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  currentUser: any;
  cni: string = "";
  profil: string = "fraudeur";

  constructor(private route: ActivatedRoute, private userSrv: UserService) {
    this.profil = this.route.snapshot.paramMap.get('profil')!;
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getUsers();
    console.log(this.profil)
  }

  getUsers() {
    if (this.profil == "fraudeur") {
      this.userSrv.findFraudeurs().subscribe((data: any) => {
        this.users = data;
      });
    } else if(this.profil == "gendarme") {
      this.userSrv.findGendarmes().subscribe((data: any) => {
        this.users = data;
      });
    } else {
      this.userSrv.findSuperieurs().subscribe((data: any) => {
        this.users = data;
      });
    }
  }

  filterByType(cni: string) {
    if (cni == "") {
      this.getUsers();
    } else {
      this.users = this.users.filter((i: { cni: string; }) => i.cni == cni);
    }
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser')!;
    this.currentUser = JSON.parse(user);
  }

}
