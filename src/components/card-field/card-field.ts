import './card-field.scss';
import { BaseComponent } from "../base-component";
import { Card } from "../card/card";

export class CardField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['card-field'])
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
  }
}
