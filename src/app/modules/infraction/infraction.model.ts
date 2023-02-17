export class Infraction {
  constructor(
    public prenomFraudeur: string,
    public nomFraudeur: string,
    public cniFraudeur: string,
    public nom: string,
    public type: string,
    public cause: string,
    public commentaire: string,
    public amende: string,
  ) {  }
}
