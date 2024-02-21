import { Component, OnInit } from '@angular/core';

import { RegisterService } from './service/register.service';
import { Ilogin } from 'src/app/interfaces/Ilogin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private $registerService: RegisterService,
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

  createLogin() {
    let login: Ilogin = {
      email: this.form.value.email,
      password:this.form.value.password
    };

    this.$registerService.createLogin(login).subscribe((response: Ilogin) => {
      this.form.reset();
      alert('WOWWW! Login Created!');
      window.location.reload();
    });
  }
}
