import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { ILogin } from "src/app/interfaces/ILogin";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(
    private _http: HttpClient
  ) {}

  createLogin(login: ILogin): Observable<any> {
    return this._http.post(`${environment.urlLocal}/logins`, login);
  }

}

