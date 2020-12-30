import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { Suit } from '../suit.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  testCard: Card;

  constructor() {
    console.log('board constructor');
    this.testCard = new Card(Suit.Spades, 1);
  }

  ngOnInit(): void {
    console.log('ngOnInit for board');
  }
}
