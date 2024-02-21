import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IDeck } from "src/app/interfaces/IDeck";

@Injectable({
  providedIn: 'root'
})

export class NewDeckFormService {
  constructor(
    private _http: HttpClient
  ) {}

  createNewDeck(newDeck: IDeck): Observable<Array<any>>{
    return this._http.post<Array<any>>(`${environment.urlLocal}/decks`, newDeck);
  }
}

