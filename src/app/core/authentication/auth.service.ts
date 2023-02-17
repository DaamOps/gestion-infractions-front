import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, shareReplay, tap} from "rxjs";
import {User} from "../../modules/user/user.model";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../modules/user/user.service";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<User>;

  public baseUrl = 'http://127.0.0.1:8080/api/v1/gestion-infractions';

  constructor(private http: HttpClient, private router: Router, private userSrv: UserService) { }

  login(credentials: any): any {
    return this.http.post(`${this.baseUrl}/auth/login`, credentials)
      .pipe(tap(result => this.setSession(result)),
        shareReplay()
      );
  }

  private setSession(authResult: any) {

    localStorage.setItem('token', authResult.token);

    this.setCurrentUser();
  }

  setCurrentUser() {
    const decodedToken: any = jwt_decode(localStorage.getItem("token")!);

    this.userSrv.findOneByUsername(decodedToken.username).subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    this.router.navigate(['home']);
  }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return true or false
    if (token == null) {
      return false;
    } else {
      return !helper.isTokenExpired(token);
    }
  }
}
