import './popup-field.scss';
import { BaseComponent } from "../../base-component";
import { PopupButton } from './popup-button';

export class PopupField extends BaseComponent {
  private readonly popupButton: PopupButton;

  constructor() {
  super('div', ['pop-up']);
  this.element.innerHTML = `
    <span class="pop-up__text">Congratulations! You successfully found all matches on min.textContent.sec.textContent minutes.</span>
    `;
this.popupButton = new PopupButton();
this.element.appendChild(this.popupButton.element)
  }

  outputResult() {
    this.element.classList.add('show');
}

}
