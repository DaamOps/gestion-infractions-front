import {Injectable} from "@angular/core";
import {Infraction} from "./infraction.model";
import {InfractionService} from "./infraction.service";
import {Observable} from "rxjs";
import {Resolve} from "@angular/router";

@Injectable()
export class InfractionsResolver implements Resolve<Infraction[]> {
  constructor(private infractionSrv: InfractionService) {}
  resolve(): Observable<any> {
    return this.infractionSrv.findAll(null);
  }
}
