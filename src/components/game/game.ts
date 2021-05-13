import { BaseComponent } from "components/base-component";
import { CardField } from "components/card-field/card-field";
import { Card } from "components/card/card";

export class Game extends BaseComponent {
  private readonly cardField: CardField;
  private activeCard?: Card;

  constructor() {
    super();
    this.cardField = new CardField();
    this.element.appendChild(this.cardField.element);
  }

  initGame(images: string[]) {
    this.cardField.clear();

    const cards = images.concat(images).map((url) => new Card(url))
      .sort(() => Math.random() - .5);

    cards.forEach((card) =>
    card.element.addEventListener('click', () => this.cardHandler(card)));

    this.cardField.addCards(cards);
  }
  private cardHandler(card: Card) {
    card.flipToFront
    if (!this.activeCard) this.activeCard = card;
    else {
      if (this.activeCard.image != card.image) {
        this.activeCard.flipToBack()
        card.flipToBack();
      }
    }
  }
}
