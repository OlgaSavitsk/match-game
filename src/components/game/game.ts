import { delay } from "../../shared/delay";
import { BaseComponent } from "../base-component";
import { CardField } from "../card-field/card-field";
import { Card } from "../card/card";

const flipDelay = 3000;
export class Game extends BaseComponent {
  private readonly cardField: CardField;
  private activeCard?: Card;

  constructor() {
    super();
    this.cardField = new CardField();
    this.element.appendChild(this.cardField.element);
  }

  /* initGame(images: string[]) {
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
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      return;
    }

    if (this.activeCard.image != card.image) {
      await delay(flipDelay);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }
    this.activeCard = undefined;
  } */
}
