import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Suit } from '../suit.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  testCard: CardComponent;

  constructor() {
    console.log('board constructor');
    this.testCard = new CardComponent();
    this.testCard.suit = Suit.Spades;
    this.testCard.value = 1;
  }

  ngOnInit(): void {
    console.log('ngOnInit for board');
  }
}
