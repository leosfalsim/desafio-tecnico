import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('login') || '';
  }

  logout() {
    localStorage.removeItem('login');
    this.router.navigate(['/home']);
  }

}
