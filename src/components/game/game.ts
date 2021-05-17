import './game.scss';
import { delay } from "../../shared/delay";
import { BaseComponent } from "../base-component";
import { CardField } from "../card-field/card-field";
import { Card } from "../card/card";
import { ImageCategoryModel } from '../../models/image-category-model';
import { Canvas } from '../timer/timer';

const flipDelay = 3000;
const colorDelay = 1000;
const match = 'match';
const unmatch = 'unmatch';

export class Game extends BaseComponent {
  private readonly cardField: CardField;
  private activeCard?: Card;
  private canvas: Canvas;

  constructor() {
    super('div', ['game']);
    this.cardField = new CardField();
    this.element.appendChild(this.cardField.element);
    this.canvas = new Canvas();
    this.element.prepend(this.canvas.element);
  }

  initGame(images: string[]) {
    this.cardField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - .5);

    cards.forEach((card) => {
    card.element.addEventListener('click', () => this.cardHandler(card))
    });

    this.cardField.addCards(cards);
  }

 private async cardHandler(card: Card) {
  if(!card.isFlipped) return;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      return;
    }

    if (this.activeCard.image != card.image) {
      await delay(colorDelay);
      card.element.classList.add(unmatch);
      this.activeCard.element.classList.add(unmatch);
      await delay(flipDelay);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }
    if (this.activeCard.image === card.image) {
      await delay(colorDelay);
      card.element.classList.add(match);
      this.activeCard.element.classList.add(match);
    }
    this.activeCard = undefined;
  }
}
