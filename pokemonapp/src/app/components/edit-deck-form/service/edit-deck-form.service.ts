import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Ideck } from "src/app/interfaces/Ideck";

@Injectable({
  providedIn: 'root'
})

export class EditDeckFormService {
  constructor(
    private _http: HttpClient
  ) {}

  editDeck(deck: Ideck): Observable<any>{
    return this._http.put<any>(`http://localhost:3000/decks/${deck.id}`, deck);
  }
}

