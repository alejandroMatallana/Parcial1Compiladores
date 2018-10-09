import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: Array<{src: string, name: string}>;

  constructor(private router: Router){
    this.images = [
      {src: 'https://cinemarkla.modyocdn.com/uploads/09c4b3aa-12d4-4686-8c3e-4060dff9cdfe/original/ico-facebook.png', 
      name: 'Facebook'},
      {src: 'https://cinemarkla.modyocdn.com/uploads/aeb3d7b0-1ce1-4208-b56d-868f19117142/original/ico-twitter.png', 
      name: 'Twitter'},
      {src: 'https://cinemarkla.modyocdn.com/uploads/8109e80b-4302-484d-8877-e935545bf653/original/ico-instagram.png', 
      name: 'Instagram'}
    ];
  }
}
