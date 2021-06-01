import './card-field.scss';

import { BaseComponent } from '../base-component';
import { Card } from '../card/card';

const showTime = 30;
export class CardField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['card-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach(card => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach(card => card.flipToBack());
    }, showTime * 1000);
  }
}
export default CardField;
