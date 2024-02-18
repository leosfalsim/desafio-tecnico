import { Component, OnInit } from '@angular/core';

import { Ideck } from 'src/app/interfaces/Ideck';

@Component({
  selector: 'app-deckdetails',
  templateUrl: './deckdetails.component.html',
  styleUrls: ['./deckdetails.component.scss']
})
export class DeckDetailsComponent implements OnInit {

  public deck: Ideck = {
    id: 0,
    cards: [],
    name: '',
    userEmail: ''
  };

  public cards: Array<Ideck> = [];

  constructor() { }

  ngOnInit(): void {

  }

}
