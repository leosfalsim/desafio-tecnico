export class Ilogin {
  [x: string]: any;
  id!: number;
  email: string;
  password: string;

  constructor(email:string, password:string) {
    this.email = email;
    this.password = password;
  }
}
