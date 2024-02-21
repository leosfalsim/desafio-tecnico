import { Component, Input, OnInit } from '@angular/core';

import { CardService } from './service/card.service';
import { IDeck } from 'src/app/interfaces/IDeck';
import { MatDialog } from '@angular/material/dialog';
import { DeckDetailsComponent } from '../deckdetails/deck-details.component';
import { EditDeckFormComponent } from '../edit-deck-form/edit-deck-form.component';
import { IData, ICard } from 'src/app/interfaces/ICard';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackBar/snack-bar.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardComponent implements OnInit {

  @Input() userEmail: string = "";

  public cards: Array<IDeck> = [];

  public numberOfSuperTypes: number = 0;
  public numberOfColors: number = 0;

  public durationInSeconds: number = 5;

  constructor(
    private $cardsService: CardService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    if(this.userEmail) {
      this.$cardsService.getCardsByUser(this.userEmail).subscribe({
        next: (response: Array<IDeck>) => {
          this.cards = response;
          this.numberOfSuperTypes = this.countNumberOfSuperTypes(this.cards);
          this.numberOfColors = this.countNumberOfColors(this.cards);
        },
        error: (error: HttpErrorResponse) => {
          this.openSnackBar('Error retrieving Cards');
        }
      });
    }
  }

  countNumberOfSuperTypes(decks: Array<IDeck>): number {
    let count = new Set();

    decks.forEach(deck => {
      deck.cards.forEach(card => {
        count.add(card['supertype']);
      });
    });
    return count.size;
  }

  countNumberOfColors(decks: Array<IDeck>): number {
    let count = new Set();

    decks.forEach(deck => {
        deck.cards.forEach(card => {
            card['types'].forEach(type => {
                count.add(type);
            });
        });
    });

    return count.size;
  }

  viewDetails(card: IDeck) {
    const dialogRef = this.dialog.open(DeckDetailsComponent, {
      width: '100%',
      height: '90%'
    });

    dialogRef.componentInstance.deck = card;

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

  editCard(card: IDeck) {
    const dialogRef = this.dialog.open(EditDeckFormComponent, {
      width: '100%',
      height: '90%'
    });

    dialogRef.componentInstance.deck = card;

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

  deleteCard(id: number) {
    this.$cardsService.deleteCardById(id).subscribe({
      next: (response: Array<IDeck>) => {
        this.cards = response;
        this.openSnackBar('Card deleted with success!');
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar('Error deleting card');
      }
    });
    this.getCards();
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message: message}
    });
  }
}
