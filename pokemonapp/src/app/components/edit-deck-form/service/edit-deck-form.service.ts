import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IDeck } from "src/app/interfaces/IDeck";

@Injectable({
  providedIn: 'root'
})

export class EditDeckFormService {
  constructor(
    private _http: HttpClient
  ) {}

  editDeck(deck: IDeck): Observable<any>{
    return this._http.put<any>(`${environment.urlLocal}/decks/${deck.id}`, deck);
  }
}

