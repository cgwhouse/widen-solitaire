import { Card } from './card';
import { Suit } from './suit.enum';

export class Deck {
  // suits: Suit[] = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
  // values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  shuffledCards: Card[] = [];

  constructor() {
    // Declare all possible suits and values in two separate arrays
    const suits: Suit[] = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
    const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    // First make an array of cards in order, this is like opening a fresh deck for the first time
    const sortedCards: Card[] = [];
    suits.forEach((suit) => {
      values.forEach((value) => {
        sortedCards.push(new Card(suit, value));
      });
    });

    // Next we want to pick from them at random and build shuffledCards
    while (sortedCards.length > 0) {
      const index = getRandomInt(sortedCards.length);
      this.shuffledCards.push(sortedCards[index]);
      sortedCards.splice(index, 1);
    }
  }
}

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
