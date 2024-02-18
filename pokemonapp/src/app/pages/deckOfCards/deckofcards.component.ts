import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deckofcards',
  templateUrl: './deckofcards.component.html',
  styleUrls: ['./deckofcards.component.scss']
})
export class DeckOfCardsComponent implements OnInit {

  public userEmail: string = "";

  constructor() { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userEmail = localStorage.getItem('login') || '';
  }

}
