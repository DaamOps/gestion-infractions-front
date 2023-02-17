import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {InfractionService} from "../infraction.service";

@Component({
  selector: 'app-infraction-show',
  templateUrl: './infraction-show.component.html',
  styleUrls: ['./infraction-show.component.css']
})
export class InfractionShowComponent implements OnInit {

  infraction: any;
  id: string;

  constructor(private route: ActivatedRoute, private infractionSrv: InfractionService, private location: Location) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getInfraction();
  }

  getInfraction() {
    this.infractionSrv.findOneById(this.id)
      .subscribe(infraction => this.infraction = infraction);
  }

  goBack(): void {
    this.location.back();
  }

}
