import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Infraction} from "./infraction.model";

@Injectable({
  providedIn: 'root'
})
export class InfractionService {

  url = 'http://localhost:8080/api/v1/gestion-infractions/';
  private routePrefix: string = 'infractions';

  constructor(private http: HttpClient) { }

  findAll(params: any) {
    return this.http.get(this.getRoutePrefixWithSlash() + "all", { params });
  }

  findOneById(id: string) {
    return this.http.get(this.getRoutePrefixWithSlash() + id);
  }

  findAllByUserId(id: string) {
    return this.http.get(this.getRoutePrefixWithSlash() + "list/" + id);
  }

  create(infraction: Infraction) {
    return this.http.post(this.getRoutePrefixWithSlash() + "add", infraction);
  }

  settle(id: string) {
    return this.http.put(this.getRoutePrefixWithSlash() + "regler/" + id, {"settle": true})
  }

  annuler(id: string) {
    return this.http.put(this.getRoutePrefixWithSlash() + "annuler/" + id, {"annule": true})
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
