import './header.scss';
import { BaseComponent } from "../base-component";
import { Logo } from '../logo/logo';

/* export class Header extends BaseComponent {

  constructor() {
    super('header', ['header']);
     this.element.innerHTML = `
      <div class="header__wrapper">
        <div class="header__container"></div>
      </div>
    `;
  }
} */

export class Header {
  header: HTMLElement;
  private readonly logo: Logo;

  createHeader(): HTMLElement {
    this.header = document.createElement('header');
    this.header.className = 'header'
    this.header.innerHTML = 'Header';
    return this.header;
    this.header.appendChild(this.logo.element)
  }
}
