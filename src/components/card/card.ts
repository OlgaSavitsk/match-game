import './card.scss';
import { BaseComponent } from '../base-component';

const flipClass = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  isConcided = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${image}')"></div>
        <div class="card__back"></div>
      </div>
    `;
  }

  flipToBack() {
    this.isFlipped = true;
    this.element.classList.add(flipClass);
  }

  flipToFront() {
    this.isFlipped = false;
    this.element.classList.remove(flipClass);
  }
}
