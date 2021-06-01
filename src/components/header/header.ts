import './header.scss';
import { Button } from '../../shared/button/button';
import { BaseComponent } from '../base-component';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';

import { HeaderContainer } from './header-container';
import { HeaderWrapper } from './header-wrapper';

export class Header extends BaseComponent {
  public header: HTMLElement;

  public headerWrapper: HeaderWrapper;

  public headerContainer: HeaderContainer;

  private logo: Logo;

  public navigation: Navigation;

  public button: Button;

  constructor(private readonly root: HTMLElement) {
    super('header', ['header']);
    this.headerWrapper = new HeaderWrapper();
    this.headerContainer = new HeaderContainer();
    this.logo = new Logo();
    this.navigation = new Navigation();
    this.element.appendChild(this.headerWrapper.element);
    this.headerWrapper.element.appendChild(this.headerContainer.element);
    this.headerContainer.element.appendChild(this.logo.element);
    this.headerContainer.element.appendChild(this.navigation.element);
  }

  render(): HTMLElement {
    this.root.appendChild(this.element);
    return this.element;
  }
}
