import { Component, OnInit } from '@angular/core';

import { LoginService } from './service/login.service';
import { Ilogin } from 'src/app/interfaces/Ilogin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private $loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.$loginService.getLogins().subscribe(
      (response: Array<Ilogin>) => {
        this.findingByUser(response);
      },
      (error) => {
        console.error('Error fetching logins:', error);
        alert('An error occurred while logging in. Please try again later.');
      }
    );
  }

  findingByUser(response: Array<Ilogin>) {
    const user = response.find(u => u.email === this.form.value.email && u.password === this.form.value.password);
    if (user) {
      this.loggingUser(user);
    } else {
      alert('User not found!');
    }
  }

  loggingUser(user: Ilogin) {
    localStorage.setItem('login', user.email);
    this.form.reset();
    alert('WOWWW! User Found!');
    this.router.navigate(['dashboard']);
  }
}
