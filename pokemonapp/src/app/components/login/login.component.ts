import { Component, OnInit } from '@angular/core';

import { LoginService } from './service/login.service';
import { ILogin } from 'src/app/interfaces/ILogin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackBar/snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  public durationInSeconds: number = 5;

  constructor(
    private $loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
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

  doLogin() {
    this.$loginService.getLogins().subscribe({
      next: (response: Array<ILogin>) => {
        this.findingByUser(response);
      },
      error: (error: HttpErrorResponse) => {
        this.openSnackBar('Error getting logins');
      }
    });
  }

  findingByUser(response: Array<ILogin>) {
    const user = response.find(u => u.email === this.form.value.email && u.password === this.form.value.password);
    if (user) {
      this.loggingUser(user);
    } else {
      this.openSnackBar('User not found!');
    }
  }

  loggingUser(user: ILogin) {
    localStorage.setItem('login', user.email);
    this.form.reset();
    this.openSnackBar('Login Sucessful');
    this.router.navigate(['dashboard']);
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {message: message}
    });
  }
}
