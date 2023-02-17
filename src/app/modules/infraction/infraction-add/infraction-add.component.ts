import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../../user/user.service";
import {Infraction} from "../infraction.model";
import {InfractionService} from "../infraction.service";

@Component({
  selector: 'app-infraction-add',
  templateUrl: './infraction-add.component.html',
  styleUrls: ['./infraction-add.component.css']
})
export class InfractionAddComponent implements OnInit {

  imageSrc: string = '../../../assets/images/contravention.jpg';
  addForm = this.fb.group({
    prenomFraudeur: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    nomFraudeur: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    cniFraudeur: [null, Validators.pattern('[0-9]{13}')],
    nom: [null, Validators.required],
    type: [null, Validators.required],
    cause: [null, Validators.required],
    commentaire: null,
    amende: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private infractionSrv: InfractionService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  get prenomFraudeur() {
    return this.addForm.get('prenomFraudeur');
  }

  get nomFraudeur() {
    return this.addForm.get('nomFraudeur');
  }

  get cniFraudeur() {
    return this.addForm.get('cniFraudeur');
  }

  get nom() {
    return this.addForm.get('nom');
  }

  get type() {
    return this.addForm.get('type');
  }

  get cause() {
    return this.addForm.get('cause');
  }

  get commentaire() {
    return this.addForm.get('commentaire');
  }

  get amende() {
    return this.addForm.get('amende');
  }

  onSubmit() {
    const newInfraction: Infraction = this.addForm.value;

    this.infractionSrv.create(newInfraction).subscribe((data: any) => {
      this.router.navigate(['/dashboard/parametres/infractions']);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
