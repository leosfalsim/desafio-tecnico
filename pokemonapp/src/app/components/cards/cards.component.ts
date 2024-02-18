import { Component, Input, OnInit } from '@angular/core';

import { CardService } from './service/card.service';
import { Ideck } from 'src/app/interfaces/Ideck';
import { MatDialog } from '@angular/material/dialog';
import { DeckDetailsComponent } from '../deckdetails/deckdetails.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardComponent implements OnInit {

  @Input() userEmail: string = "";

  public cards: Array<Ideck> = [];

  constructor(private $cardsService: CardService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    if(this.userEmail) {
      this.$cardsService.getCardsByUser(this.userEmail).subscribe((response: Array<Ideck>) => {
        this.cards = response;
      });
    }
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DeckDetailsComponent);

    let card = this.cards.find((c: Ideck) => {
      return c.id === id;
    });

    dialogRef.componentInstance.deck = card!;

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
}
