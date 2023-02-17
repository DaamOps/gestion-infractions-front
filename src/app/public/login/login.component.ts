import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../core/authentication/auth.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentialsError: boolean = false;
  isUserDeleted: boolean = false;

  loginForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(8)]],
  });

  constructor(private fb: FormBuilder, private authSrv: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    let credentials = this.loginForm.value;

    if (credentials.username && credentials.password) {

      this.authSrv.login(credentials)
        .subscribe(
          (data: any) => {
            let decodedToken: any = jwt_decode(localStorage.getItem("token")!);
            this.router.navigateByUrl('/dashboard/parametres/infractions');
          },
          (error: any) => {
            if (error.error.code === 401) {
              this.credentialsError = true;
              this.loginForm.controls['username'].setErrors({invalid: true});
              this.loginForm.controls['password'].setErrors({invalid: true});
            }
          }
        );
    }
  }

}
