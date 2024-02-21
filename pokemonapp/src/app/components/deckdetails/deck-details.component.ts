import { Component, OnInit } from '@angular/core';

import { IDeck } from 'src/app/interfaces/IDeck';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss']
})
export class DeckDetailsComponent implements OnInit {

  public deck: IDeck = {
    id: 0,
    cards: [],
    name: '',
    userEmail: ''
  };

  constructor() {}

  ngOnInit(): void {}

}
