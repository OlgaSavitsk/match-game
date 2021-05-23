import './game.scss';
import { delay } from "../../shared/delay";
import { BaseComponent } from "../base-component";
import { CardField } from "../card-field/card-field";
import { Card } from "../card/card";
import { ImageCategoryModel } from '../../models/image-category-model';
import { Timer } from '../timer/timer';
import { PopupField } from '../popup/popup-field/popup-field';
import { PopupCover } from '../popup/popup-cover/popup-cover';
import { Button } from '../../shared/button/button';

const flipDelay = 3000;
const colorDelay = 1000;
const match = 'match';
const unmatch = 'unmatch';
const openCards = [];
let stopWatch: number;

export class Game extends BaseComponent {
  private readonly game: HTMLElement;
  private readonly cardField: CardField;
  private activeCard?: Card;
  private timer: Timer;
  private popupField: PopupField;
  private popupCover: PopupCover;
  public button: Button;

  constructor() {
    super('div', ['game']);
    this.cardField = new CardField();
    this.element.appendChild(this.cardField.element);
    this.timer = new Timer();
    this.element.prepend(this.timer.element);
    this.popupField = new PopupField();
    this.element.appendChild(this.popupField.element);
    this.popupCover = new PopupCover();
    this.element.appendChild(this.popupCover.element);
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
    this.timer.initTimer();
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
      card.element.classList.remove(unmatch);
      this.activeCard.element.classList.remove(unmatch);
    }
    if (this.activeCard.image === card.image) {
      await delay(colorDelay);
      card.element.classList.add(match);
      this.activeCard.element.classList.add(match);
      openCards.push(this.activeCard.element)
    }
    this.activeCard = undefined;
    if (openCards.length === 6){
      await delay(colorDelay);
      this.popupCover.element.classList.add('show');
      this.popupField.element.classList.add('show');
      }
    }
}
