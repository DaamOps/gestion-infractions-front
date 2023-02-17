export class User {
  constructor(
    public username: string,
    public password: string,
    public prenom: string,
    public nom: string,
    public cni: string,
    public adresse: string,
    public telephone: string,
    public matriculeVoiture: string
  ) {  }
}
