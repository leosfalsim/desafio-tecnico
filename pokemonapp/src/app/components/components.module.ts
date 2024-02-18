import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//My Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/leftmenu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DeckDetailsComponent } from './deckdetails/deckdetails.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent,
    DeckDetailsComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent,
    DeckDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
