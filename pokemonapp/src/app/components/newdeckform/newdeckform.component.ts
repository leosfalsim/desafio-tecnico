import { Component, OnInit } from '@angular/core';
import { Data, ICard } from 'src/app/interfaces/Icard';

import { CardService } from '../cards/service/card.service';

import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ideck } from 'src/app/interfaces/Ideck';
import { NewDeckFormService } from './service/newdeckform.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackBar/snackBar.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-newdeckform',
  templateUrl: './newdeckform.component.html',
  styleUrls: ['./newdeckform.component.scss']
})

export class NewdeckFormComponent implements OnInit {

  public cards: Array<Data> = [];

  public displayedColumns: string[] = ['images', 'name', 'supertype', 'level', 'hp', 'rarity', 'select'];
  public dataSource = new MatTableDataSource<Data>();

  public form!: FormGroup;

  public numberOfCardsOnDeck: number = 0;
  public numberOfCardsWithSameName: number = 0;

  public filterValue: string = '';

  public durationInSeconds: number = 5;

  public isLoading: boolean = true;

  constructor(
    private $cardsService: CardService,
    private $newDeckFormService: NewDeckFormService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllCards();
    this.createForm();
  }

  getAllCards() {
    this.$cardsService.getAllCards().subscribe({
      next: (response: ICard) => {
        this.cards = response.data;
        if(this.cards) {
          this.updateDataSource(this.cards);
        }
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar('Error retrieving Cards');
      }
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };

    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
  }

  setSelectionFalseToCards(cards: Array<Data>) {
    cards.map((c: Data) => {
      c.isCardSelected = false;
    });
    return cards;
  }

  addCardToDeck(card: Data) {

    if(this.checkIfHas4CardsWithSameNameAdded(card))
    return;

    this.cards.map((c: Data) => {
      if(card.id === c.id) {
        c.isCardSelected = !c.isCardSelected;
      }
    });

    this.numberOfCardsOnDeck = this.cards.filter((c: Data) => c.isCardSelected).length;

    this.updateDataSource(this.cards);
  }

  checkIfHas4CardsWithSameNameAdded(card: Data): boolean {
    this.numberOfCardsWithSameName = this.cards.filter((c: Data) => c.isCardSelected && card.name === c.name).length;
    if(this.numberOfCardsWithSameName >= 4 && !card.isCardSelected) {
      this.openSnackBar('You can only add 4 cards with the same name!');
      return true;
    }
    return false;
  }

  updateDataSource(cards: Array<Data>) {
    this.dataSource = new MatTableDataSource<Data>(cards);
    this.dataSource.filter = this.filterValue;
  }

  createDeck() {
    let deck: Ideck = {
      cards: this.cards.filter((c: Data) => c.isCardSelected === true),
      name: this.form.value.name,
      userEmail: localStorage.getItem('login') || ''
    };

    this.$newDeckFormService.createNewDeck(deck).subscribe((response: any) => {
      console.log(response);
    });

    this.$newDeckFormService.createNewDeck(deck).subscribe({
      next: (response: any) => {
        this.openSnackBar('Deck of Cards created with success!');
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar('Error when creating a Deck of Cards');
      }
    })
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message: message}
    });
  }

}
