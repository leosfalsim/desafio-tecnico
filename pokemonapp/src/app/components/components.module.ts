import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//My Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/leftmenu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DeckDetailsComponent } from './deckdetails/deckdetails.component';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { NewdeckFormComponent } from './newdeckform/newdeckform.component';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SnackBarComponent } from './snackBar/snackBar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent,
    DeckDetailsComponent,
    NewdeckFormComponent,
    SnackBarComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent,
    DeckDetailsComponent,
    NewdeckFormComponent,
    SnackBarComponent
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
    MatSnackBarModule
  ]
})
export class ComponentsModule { }
