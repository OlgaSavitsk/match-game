import { BaseComponent } from '../base-component';
import './header.scss';

export class HeaderContainer extends BaseComponent {
  constructor() {
    super('div', ['header__container']);
  }
}
