import { BaseComponent } from '../base-component';
import './header.scss';

export class HeaderWrapper extends BaseComponent {
  constructor() {
    super('div', ['header__wrapper']);
  }
}
