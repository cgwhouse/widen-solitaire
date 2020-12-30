import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;

  constructor() {
    console.log('constructor for card component');
  }

  ngOnInit(): void {
    console.log('ngOnInit for card component');
  }
}
