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
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
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
      this.router.navigate(['/home']);
    });
  }
}
