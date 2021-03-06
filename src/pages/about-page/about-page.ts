import '../pages.scss';
import { Component } from 'components/component';

import { AboutField } from './about-field/about-field';
import { FormRegistr } from '../../components/form/form-registr';
import { Button } from '../../shared/button/button';
import { ButtonRegistr } from '../../shared/button/button-registr';

export class AboutPage implements Component {
  private readonly aboutPage: HTMLElement;

  private button: Button;

  constructor(private readonly root: HTMLElement) {
    this.aboutPage = document.createElement('div');
    this.aboutPage.classList.add('about-page');
  }

  render(): HTMLElement {
    this.root.appendChild(this.aboutPage);
    this.aboutPage.appendChild(new AboutField(this.aboutPage).render());
    this.root.appendChild(new ButtonRegistr(this.aboutPage).render()).onclick = () => {
      new FormRegistr(this.aboutPage).render();
    };
    this.button = new Button();
    this.aboutPage.prepend(this.button.element);
    this.button.element.innerHTML = `
      <a class="button__link" href="#game">START GAME</a>
    `;
    return this.aboutPage;
  }
}
export default AboutPage;
