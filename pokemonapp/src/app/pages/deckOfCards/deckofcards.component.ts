import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NewdeckFormComponent } from 'src/app/components/newdeckform/new-deck-form.component';

@Component({
  selector: 'app-deckofcards',
  templateUrl: './deckofcards.component.html',
  styleUrls: ['./deckofcards.component.scss']
})
export class DeckOfCardsComponent implements OnInit {

  public userEmail: string = "";
  public componentName: string = '';

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.componentName = this.route.firstChild?.component?.name!;
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
