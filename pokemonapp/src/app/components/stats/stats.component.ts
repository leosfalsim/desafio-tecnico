import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/components/cards/service/card.service';
import { IStats } from 'src/app/interfaces/IStats';
import { IData, ICard } from 'src/app/interfaces/ICard';
import { IDeck } from 'src/app/interfaces/IDeck';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackBar/snack-bar.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public allCards: ICard = {
    count: 0,
    data: [],
    page: 0,
    pageSize: 0,
    totalCount: 0
  };

  public decks: Array<IDeck> = [];

  public stats: IStats = {
    totalOfCards: 0,
    numberOfDecks: 0,
    numberOfCardsSelected: 0,
    totalHP: 0,
    highLevelCard: 0,
    totalPrice: 0
  };

  public userEmail: string = '';
  public componentName: string = '';

  public durationInSeconds: number = 5;

  constructor(
    private $cardsService: CardService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getAllCards();
    this.getCardsByUser();
  }

  getAllCards() {
    this.$cardsService.getAllCards().subscribe({
      next: (response: ICard) => {
        this.allCards = response;
        this.stats.totalOfCards = this.allCards.count;
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar('Error retrieving Cards');
      }
    });
  }

  getCardsByUser() {
    this.userEmail = localStorage.getItem('login') || '';
    if(this.userEmail) {
      this.$cardsService.getCardsByUser(this.userEmail).subscribe({
        next: (response: Array<IDeck>) => {
          this.decks = response;
          this.stats.numberOfDecks = this.decks.length;
          this.getDeckStats(this.decks);
        },
        error: (error: HttpErrorResponse) => {
          this.openSnackBar('Error retrieving Cards');
        }
      });
    }
  }

  getDeckStats(decks: Array<IDeck>) {
    decks.forEach((deck: IDeck) => {
      this.stats.numberOfCardsSelected += deck.cards.length;
      deck.cards.forEach((card: IData) => {
        this.stats.totalHP += Number(card.hp);
        let currentLevel = Number(card['level']);
        this.stats.highLevelCard = currentLevel > this.stats.highLevelCard ? currentLevel : this.stats.highLevelCard;
        this.stats.totalPrice += card.cardmarket.prices.trendPrice;
      });
    });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message: message}
    });
  }
}
