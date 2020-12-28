import { Component, Input, OnInit } from '@angular/core';
import { Suit } from '../suit.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() suit!: Suit;
  @Input() value!: number;

  constructor() {
    console.log('constructor for card component');
  }

  ngOnInit(): void {
    console.log('ngOnInit for card component');
  }
}
