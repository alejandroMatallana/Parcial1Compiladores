import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  days: number[] = new Array<number>();
  months: string[] = new Array<string>();
  years: number[] = new Array<number>();

  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= 31; i++){
      this.days.push(i);
    }
    this.months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    for(let j = 1967; j <= 2019; j++){
      this.years.push(j);
    }
  }
}
