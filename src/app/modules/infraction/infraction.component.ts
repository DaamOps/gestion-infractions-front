import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraction',
  templateUrl: './infraction.component.html',
  styleUrls: ['./infraction.component.css']
})
export class InfractionComponent implements OnInit {

  currentUser: any;

  constructor() {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser')!;
    this.currentUser = JSON.parse(user);
  }

}
