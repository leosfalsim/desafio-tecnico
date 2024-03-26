import { Component, OnInit } from '@angular/core';
import { IData, ICard } from 'src/app/interfaces/ICard';

import { CardService } from '../cards/service/card.service';

import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDeck } from 'src/app/interfaces/IDeck';
import { NewDeckFormService } from './service/new-deck-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackBar/snack-bar.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-deck-form',
  templateUrl: './new-deck-form.component.html',
  styleUrls: ['./new-deck-form.component.scss']
})

export class NewdeckFormComponent implements OnInit {

  public cards: Array<IData> = [];

  public displayedColumns: string[] = ['images', 'name', 'supertype', 'level', 'hp', 'rarity', 'hpXlevel', 'select'];
  public dataSource = new MatTableDataSource<IData>();

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
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialogRef: MatDialogRef<NewdeckFormComponent>
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

  applyFilter(event?: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };

    this.filterValue = event ? (event.target as HTMLInputElement).value : this.filterValue;
    this.filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
  }

  setSelectionFalseToCards(cards: Array<IData>) {
    cards.map((c: IData) => {
      c.isCardSelected = false;
    });
    return cards;
  }

  addCardToDeck(card: IData) {

    if(this.checkIfHas4CardsWithSameNameAdded(card))
    return;

    this.cards.map((c: IData) => {
      if(card.id === c.id) {
        c.isCardSelected = !c.isCardSelected;
      }
    });

    this.numberOfCardsOnDeck = this.cards.filter((c: IData) => c.isCardSelected).length;

    this.updateDataSource(this.cards);
  }

  checkIfHas4CardsWithSameNameAdded(card: IData): boolean {
    this.numberOfCardsWithSameName = this.cards.filter((c: IData) => c.isCardSelected && card.name === c.name).length;
    if(this.numberOfCardsWithSameName >= 4 && !card.isCardSelected) {
      this.openSnackBar('You can only add 4 cards with the same name!');
      return true;
    }
    return false;
  }

  updateDataSource(cards: Array<IData>) {
    this.dataSource = new MatTableDataSource<IData>(cards);
    this.applyFilter();
  }

  createDeck() {
    let deck: IDeck = {
      cards: this.cards.filter((c: IData) => c.isCardSelected === true),
      name: this.form.value.name,
      userEmail: localStorage.getItem('login') || ''
    };

    this.$newDeckFormService.createNewDeck(deck).subscribe({
      next: (response: any) => {
        this.openSnackBar('Deck of Cards created with success!');
        this.closeDialog();

        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });


      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar('Error when creating a Deck of Cards');
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message: message}
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
