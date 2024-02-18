import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public routesApp: Array<any> = [
    {
      id: 1,
      route: "/dashboard/deckofcards",
      active: false
    }
  ];

  public currentRoute: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute() {
    this.currentRoute = this.routesApp.find((r: any) => {
      r.active = true;
      return r.route === this.router.url;
    });
  }


}
