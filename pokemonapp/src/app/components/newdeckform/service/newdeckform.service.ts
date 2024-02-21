import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Ideck } from "src/app/interfaces/Ideck";

@Injectable({
  providedIn: 'root'
})

export class NewDeckFormService {
  constructor(
    private _http: HttpClient
  ) {}

  createNewDeck(newDeck: Ideck): Observable<Array<any>>{
    return this._http.post<Array<any>>('http://localhost:3000/decks', newDeck);
  }
}

