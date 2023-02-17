import {Component, OnInit} from '@angular/core';
import {InfractionService} from "../infraction.service";
import {Infraction} from "../infraction.model";

@Component({
  selector: 'app-infraction-list',
  templateUrl: './infraction-list.component.html',
  styleUrls: ['./infraction-list.component.css']
})
export class InfractionListComponent implements OnInit {

  infractions: any;
  currentUser: any;
  type: string = "";
  regler: boolean = false;
  role: string = "";

  constructor(private infractionSrv: InfractionService) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getInfractions();
  }

  getInfractions() {
    if (this.role == "ROLE_USER") {
      this.infractionSrv.findAllByUserId(this.currentUser.id).subscribe((data: any) => {
        this.infractions = data;
      });
    } else {
      const params = this.getRequestParams(null);
      this.infractionSrv.findAll(params).subscribe((data: any) => {
        this.infractions = data;
      });
    }
  }

  filterByType(type: string) {
    if (type == "") {
      this.getInfractions();
    } else {
      this.infractions = this.infractions.filter((i: { type: string; }) => i.type == type);
    }
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser')!;
    this.currentUser = JSON.parse(user);
    this.role = this.currentUser?.role.libelle;
  }

  getRequestParams(paye: boolean | null): any {
    let params: any = {};

    if (paye !== null) {
      params[`paye`] = paye;
    }

    return params;
  }

  onSettlement(id: string, index: number) {
    this.infractionSrv.settle(id).subscribe(
      () => {
        this.infractions.splice(index, 1);
      }
    );

  }

  onCancel(id: string, index: number) {
    if (confirm("Etes vous sûr de vouloir annuler cette infraction? Cette action est irreversible.")) {
      this.infractionSrv.annuler(id).subscribe(
        () => {
          this.regler = true;
        }
      );
    }
  }

}
