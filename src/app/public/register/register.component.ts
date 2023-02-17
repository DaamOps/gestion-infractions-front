import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../modules/user/user.service";
import {User} from "../../modules/user/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: boolean = false;
  registerForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
    prenom: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    nom: [null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    cni: [null, Validators.pattern('[0-9]{13}')],
    adresse: [null, [Validators.required, Validators.minLength(3)]],
    telephone: [null, [Validators.required, Validators.pattern('^(33|7[05-8])[0-9]{7}$')]],
    matriculeVoiture: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get prenom() {
    return this.registerForm.get('prenom');
  }

  get nom() {
    return this.registerForm.get('nom');
  }

  get cni() {
    return this.registerForm.get('cni');
  }

  get adresse() {
    return this.registerForm.get('adresse');
  }

  get telephone() {
    return this.registerForm.get('telephone');
  }

  get matriculeVoiture() {
    return this.registerForm.get('matriculeVoiture');
  }

  onSubmit() {
    if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this.error = true;
    } else {
      delete this.registerForm.value.confirmPassword;
      const newUser: User = this.registerForm.value;

      this.userSrv.createFraudeur(newUser).subscribe((data: any) => {
        this.router.navigate(['/login']);
      });
    }
  }

}
