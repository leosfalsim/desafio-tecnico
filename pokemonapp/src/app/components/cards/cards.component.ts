import { Component, Input, OnInit } from '@angular/core';

import { CardService } from './service/card.service';
import { Ideck } from 'src/app/interfaces/Ideck';
import { MatDialog } from '@angular/material/dialog';
import { DeckDetailsComponent } from '../deckdetails/deckdetails.component';
import { EditDeckFormComponent } from '../edit-deck-form/edit-deck-form.component';
import { ICard } from 'src/app/interfaces/Icard';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardComponent implements OnInit {

  @Input() userEmail: string = "";

  public cards: Array<Ideck> = [];

  constructor(
    private $cardsService: CardService,
    public dialog: MatDialog
  ) {}

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

  viewDetails(id: number) {
    const dialogRef = this.dialog.open(DeckDetailsComponent);

    let card = this.cards.find((c: Ideck) => {
      return c.id === id;
    });

    dialogRef.componentInstance.deck = card!;

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

  editCard(card: Ideck) {
    const dialogRef = this.dialog.open(EditDeckFormComponent, {
      width: '100%',
      height: '90%'
    });

    dialogRef.componentInstance.deck = card;

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

  deleteCard(id: number) {
    this.$cardsService.deleteCardById(id).subscribe((response: any) => {
      this.cards = response;
    });
    this.getCards();
  }
}
