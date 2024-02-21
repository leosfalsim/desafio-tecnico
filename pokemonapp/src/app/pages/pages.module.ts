import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//My Routes
import { RoutingModule } from './routing.module';

//My Components
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeckOfCardsComponent } from './deckOfCards/deckofcards.component';

//Angular Material Components
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    DeckOfCardsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ComponentsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PagesModule { }
