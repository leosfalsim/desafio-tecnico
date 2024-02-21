import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/components/cards/service/card.service';
import { Data, ICard } from 'src/app/interfaces/Icard';
import { Ideck } from 'src/app/interfaces/Ideck';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public cards: Array<Data> = [];

  public routesApp: Array<any> = [
    {
      id: 1,
      route: "/dashboard/deckofcards",
      active: false
    }
  ];

  public currentRoute: any = {
      id: -1,
      route: "",
      active: false
  };

  constructor(
    private router: Router,
    private $cardsService: CardService
  ) {}

  ngOnInit(): void {
    this.getCards();
    this.checkRoute();
  }

  getCards() {
    this.$cardsService.getAllCards().subscribe((response: ICard) => {
      this.cards = response.data;
      this.$cardsService.allCards = this.cards;
    });
  }

  checkRoute() {
    this.currentRoute = this.routesApp.find((r: any) => {
      r.active = true;
      return r.route === this.router.url;
    });
  }

}
