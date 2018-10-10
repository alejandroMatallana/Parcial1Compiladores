import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categoryChoosen: string;
  categories: Array<{categoryName: string}>;
  accionCategory: string;
  aventuraCategory: string;
  comediaCategory: string;
  romanceCategory: string;
  terrorCategory: string;
  allCategories: string;
  cienciaFiccionCategory: string;
  movies: Array<{title: string, imageSrc: string, category: string, year: number}>;
  moviesFilter: Array<{title: string, imageSrc: string, category: string, year: number}>;

  constructor() { }

  ngOnInit() {
    this.accionCategory = 'Acción';
    this.aventuraCategory = 'Aventura';
    this.comediaCategory = 'Comedia';
    this.romanceCategory = 'Romance';
    this.terrorCategory = 'Terror';
    this.cienciaFiccionCategory = 'Ciencia Ficcion';
    this.allCategories = 'Todas';
    this.categoryChoosen = this.allCategories;
    this.categories = [
      {categoryName: this.allCategories},
      { categoryName: this.accionCategory},
      { categoryName: this.aventuraCategory},
      { categoryName: this.cienciaFiccionCategory},
      { categoryName: this.comediaCategory},
      { categoryName: this.romanceCategory},
      { categoryName: this.terrorCategory}
    ];
    this.movies = [
      {title: 'Venom', imageSrc: 'https://cinemarkmedia.modyocdn.com/co/300x400/189859.jpg?version=1539093600000', 
      category: this.cienciaFiccionCategory, year: 2018},
      {title: 'Pie Pequeño', imageSrc: 'https://cinemarkmedia.modyocdn.com/co/300x400/189943.jpg?version=1539108000000', 
      category: this.aventuraCategory, year: 2018},
      {title: 'Un Pequeño Favor', imageSrc: 'https://cinemarkmedia.modyocdn.com/co/300x400/190443.jpg?version=1539108000000', 
      category: this.comediaCategory, year: 2018},
      {title: 'La Monja', imageSrc: 'https://cinemarkmedia.modyocdn.com/co/300x400/185656.jpg?version=1539108000000', 
      category: this.terrorCategory, year: 2018}
    ];

    this.moviesFilter = this.movies;
  }

  filter(category: string): void{
    if(category == this.allCategories){
      this.moviesFilter = this.movies;
    } else {
      this.moviesFilter = this.movies.filter(movie => movie.category == category);
    }
  }

}
