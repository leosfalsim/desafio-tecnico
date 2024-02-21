import { Component, OnInit } from '@angular/core';

import { RegisterService } from './service/register.service';
import { ILogin } from 'src/app/interfaces/ILogin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackBar/snack-bar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form!: FormGroup;

  public durationInSeconds: number = 5;

  constructor(
    private $registerService: RegisterService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const EMAILPATTERN: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAILPATTERN)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  createLogin() {
    let login: ILogin = {
      email: this.form.value.email,
      password:this.form.value.password
    };

    this.$registerService.createLogin(login).subscribe({
      next: (response: ILogin) => {
        this.form.reset();
        this.openSnackBar('Login created with succesful!');
        window.location.reload();
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar('Error creating login');
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message: message}
    });
  }
}
