import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Ilogin } from "src/app/interfaces/Ilogin";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(
    private _http: HttpClient
  ) {}

  getLogins(): Observable<Array<Ilogin>>{
    return this._http.get<Array<Ilogin>>('http://localhost:3000/logins');
  }
}

