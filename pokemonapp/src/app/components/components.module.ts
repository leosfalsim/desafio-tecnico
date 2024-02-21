import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//My Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DeckDetailsComponent } from './deckdetails/deck-details.component';
import { NewdeckFormComponent } from './newdeckform/new-deck-form.component';
import { SnackBarComponent } from './snackBar/snack-bar.component';
import { EditDeckFormComponent } from './edit-deck-form/edit-deck-form.component';
import { StatsComponent } from './stats/stats.component';

//Material Components
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent,
    DeckDetailsComponent,
    NewdeckFormComponent,
    SnackBarComponent,
    EditDeckFormComponent,
    StatsComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent,
    DeckDetailsComponent,
    NewdeckFormComponent,
    SnackBarComponent,
    EditDeckFormComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class ComponentsModule { }
