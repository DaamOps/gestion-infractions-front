export class Infraction {
  constructor(
    public id: string,
    public nom: string,
    public type: string,
    public cause: string,
    public commentaire: string,
    public amende: string,
    public paye: boolean,
    public userId: string,
    public dateInfraction: string
  ) {  }
}
