import {Role} from "./role.model";

export class User {
  constructor(
    public id: string,
    public username: string,
    public password: string,
    public nom: string,
    public prenom: string,
    public poste: string,
    public brigade: string,
    public role: Role
  ) {  }
}
