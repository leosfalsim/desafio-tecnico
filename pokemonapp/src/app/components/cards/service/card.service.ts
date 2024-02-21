import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICard } from "src/app/interfaces/ICard";
import { IDeck } from "src/app/interfaces/IDeck";

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(
    private _http: HttpClient
  ) {}

  getAllCards(): Observable<ICard>{
    return this._http.get<ICard>(`${environment.urlPokemonTCG}/cards/`);
  }

  getCardsByUser(userEmail: string): Observable<Array<IDeck>>{
    return this._http.get<Array<IDeck>>(`${environment.urlLocal}/decks?userEmail=${userEmail}`);
  }

  deleteCardById(id: number): Observable<any>{
    return this._http.delete<any>(`${environment.urlLocal}/decks/${id}`);
  }
}

