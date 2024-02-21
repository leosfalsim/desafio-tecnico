import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '../guards/authorization.guard';

//My Components
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeckOfCardsComponent } from './deckOfCards/deckofcards.component';
import { StatsComponent } from '../components/stats/stats.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthorizationGuard],
    children: [
      {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full',
      },
      {
        path: 'deckofcards',
        component: DeckOfCardsComponent
      },
      {
        path: 'stats',
        component: StatsComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
