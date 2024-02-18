import { Component, Input, OnInit } from '@angular/core';

import { CardService } from './service/card.service';
import { Ideck } from 'src/app/interfaces/Ideck';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardComponent implements OnInit {

  @Input() userEmail: string = "";

  public cards: Array<Ideck> = [];

  constructor(private $cardsService: CardService) { }

  ngOnInit(): void {
    console.log(this.userEmail);
    this.getCards();
  }

  getCards() {
    if(this.userEmail) {
      this.$cardsService.getCardsByUser(this.userEmail).subscribe(response => {
        console.log("entrei");
        console.log(response);
        this.cards = response;
      });
    }
    // }else{
    //   this.$cardsService.getCards().subscribe(response => {
    //     this.cards = response.data;
    //   });
    // }
  }
}
