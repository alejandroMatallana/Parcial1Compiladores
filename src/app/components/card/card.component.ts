import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() imageSrc: string;
  @Input() category: string;
  @Input() year: number;

  constructor() { }

  ngOnInit() {
  }

}
