import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Data, ICard } from "src/app/interfaces/Icard";
import { Ideck } from "src/app/interfaces/Ideck";

@Injectable({
  providedIn: 'root'
})

export class CardService {

  public allCards: Array<Data> = [];

  constructor(
    private _http: HttpClient
  ) {}

  getAllCards(): Observable<ICard>{
    return this._http.get<ICard>('https://api.pokemontcg.io/v2/cards/');
  }

  getCardsByUser(userEmail: string): Observable<Array<Ideck>>{
    return this._http.get<Array<Ideck>>(`http://localhost:3000/decks?userEmail=${userEmail}`);
  }

  deleteCardById(id: number): Observable<any>{
    return this._http.delete<any>(`http://localhost:3000/decks/${id}`);
  }
}

