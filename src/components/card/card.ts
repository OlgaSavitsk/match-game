import './card.scss';
import { BaseComponent } from "components/base-component";

const flipClass = 'flipped';

export class Card extends BaseComponent {
  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
      <div class="card">
          <div class="card__front" style="backgroun-image: url('./images/${image}')"></div>
          <div class="card__back"></div>
        </div>
      `;
  }

  flipToBack() {
    this.element.classList.add(flipClass);
  }
  flipToFront() {
    this.element.classList.remove(flipClass);
  }
}
