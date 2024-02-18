import { Component, OnInit } from '@angular/core';

import { LoginService } from './service/login.service';
import { Ilogin } from 'src/app/interfaces/Ilogin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  getLogins() {
    let user;

    this.$loginService.getLogins().subscribe((response: Array<Ilogin>) => {
      user = response.find((u: Ilogin) => {
        return u.email === this.form.value.email && u.password === this.form.value.password
      });

      if(user) {
        localStorage.setItem('login', user.email);
        this.form.reset();
        alert('WOWWW! User Found!');
        this.router.navigate(['dashboard']);
      }else {
        alert('User not found!');
      }
    });
  }
}
