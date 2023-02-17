import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api/v1/gestion-infractions/';
  private routePrefix: string = 'users';

  constructor(private http: HttpClient) { }

  findOneByUsername(username: string) {
    return this.http.get(this.getRoutePrefixWithSlash() + username + '/check');
  }

  findFraudeurs() {
    return this.http.get(this.getRoutePrefixWithSlash() + 'fraudeurs/list');
  }

  createFraudeur(user: User) {
    return this.http.post(this.getRoutePrefixWithSlash() + 'fraudeurs/add', user);
  }

  findGendarmes() {
    return this.http.get(this.getRoutePrefixWithSlash() + 'gendarmes/list');
  }

  findSuperieurs() {
    return this.http.get(this.getRoutePrefixWithSlash() + 'superieurs/list');
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
