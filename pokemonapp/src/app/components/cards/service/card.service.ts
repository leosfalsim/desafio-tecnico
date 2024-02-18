import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICard } from "src/app/interfaces/Icard";
import { Ideck } from "src/app/interfaces/Ideck";

@Injectable({
  providedIn: 'root'
})

export class CardService {
  constructor(
    private _http: HttpClient
  ) {}

  getCards(): Observable<ICard>{
    return this._http.get<ICard>('https://api.pokemontcg.io/v2/cards/');
  }

  getCardsByUser(userEmail: string): Observable<Array<Ideck>>{
    return this._http.get<Array<Ideck>>(`http://localhost:3000/decks?userEmail=${userEmail}`);
  }
}

