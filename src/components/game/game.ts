import './game.scss';
import { count, countReset } from 'console';

import { Button } from '../../shared/button/button';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { CardField } from '../card-field/card-field';
import { Card } from '../card/card';
import { PopupCover } from '../popup/popup-cover/popup-cover';
import { PopupField } from '../popup/popup-field/popup-field';
import { Timer } from '../timer/timer';

const flipDelay = 1000;
const colorDelay = 1000;

export class Game extends BaseComponent {
  private readonly game: HTMLElement;

  private readonly cardField: CardField;

  private activeCard?: Card;

  private isAnimation = false;

  private timer: Timer;

  private popupField: PopupField;

  private popupCover: PopupCover;

  public button: Button;

  private openCards: Array<Card> = [];

  private active: Array<Card> = [];

  private mistake: Array<Card> = [];

  private timeGame: number;

  private cards: Card[];

  count: number;

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
    this.button = new Button();
    this.element.appendChild(this.button.element).onclick = () => {
      this.timer.stopTimer();
      this.button.element.innerHTML = `
      <a class="button__link" href="#">${this.counter}</a>`;
    };
  }

  initGame(images: string[], start: number, end: number): void {
    this.cardField.clear();

    const addCard = images.slice(start, end);
    const copyCard = addCard.slice();

    const cards = addCard
      .concat(copyCard)
      .map(url => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach(card => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
    this.cardField.addCards(cards);
    this.timer.initTimer();
    this.counter();
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();

    if (this.activeCard) {
      this.active.push(this.activeCard);
    }
    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }
    if (this.activeCard.image !== card.image) {
      await delay(colorDelay);
      card.element.classList.add('unmatch');
      this.activeCard.element.classList.add('unmatch');
      this.mistake.push(this.activeCard);
      await delay(flipDelay);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      card.element.classList.remove('unmatch');
      this.activeCard.element.classList.remove('unmatch');
    }
    if (this.activeCard.image === card.image) {
      await delay(colorDelay);
      card.element.classList.add('match');
      this.activeCard.element.classList.add('match');
      this.openCards.push(this.activeCard);
    }
    this.activeCard = undefined;
    this.isAnimation = false;
    const lavelCategory = localStorage.getItem('lavel-category');
    if (lavelCategory === '4x4' && this.openCards.length === 8) {
      this.timer.stopTimer();
      await delay(colorDelay);
      this.popupCover.element.classList.add('show');
      this.popupField.element.classList.add('show');
    }
    if (lavelCategory === '6x6' && this.openCards.length === 18) {
      this.timer.stopTimer();
      this.timeGame = this.timer.textContent;
      await delay(colorDelay);
      this.popupCover.element.classList.add('show');
      this.popupField.element.classList.add('show');
      console.log(this.count);
    }
  }

  counter(): number {
    const count = (this.active.length - this.mistake.length) * 100 - (this.timeGame) * 10;
    this.button.textContent = count;
    return count;
  }
}
export default Game;
