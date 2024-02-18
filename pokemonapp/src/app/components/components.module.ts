import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//My Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/leftmenu.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    CardComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
