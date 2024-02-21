import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewdeckFormComponent } from 'src/app/components/newdeckform/newdeckform.component';

@Component({
  selector: 'app-deckofcards',
  templateUrl: './deckofcards.component.html',
  styleUrls: ['./deckofcards.component.scss']
})
export class DeckOfCardsComponent implements OnInit {

  public userEmail: string = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userEmail = localStorage.getItem('login') || '';
  }

  createNewDeck() {
      const dialogRef = this.dialog.open(NewdeckFormComponent, {
        width: '100%',
        height: '90%'
      });

      dialogRef.afterClosed().subscribe((result: any) => {
      });

  }

}
