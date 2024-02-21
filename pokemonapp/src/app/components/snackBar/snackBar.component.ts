import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackBar',
  templateUrl: './snackBar.component.html',
  styleUrls: ['./snackBar.component.scss']
})
export class SnackBarComponent implements OnInit {

  public snackMessage: string = '';
  snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
