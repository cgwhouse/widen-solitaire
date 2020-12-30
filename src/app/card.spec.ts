import { Card } from './card';
import { Suit } from './suit.enum';

describe('Card', () => {
  it('should create an instance', () => {
    expect(new Card(Suit.Spades, 1)).toBeTruthy();
  });
});
