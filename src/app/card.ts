import { Suit } from './suit.enum';

export class Card {
  suit: Suit;
  value: number;

  constructor(s: Suit, v: number) {
    this.suit = s;
    this.value = v;
  }
}
