import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Ilogin } from "src/app/interfaces/Ilogin";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(
    private _http: HttpClient
  ) {}

  createLogin(login: Ilogin): Observable<any> {
    return this._http.post("http://localhost:3000/logins", login);
  }

}

