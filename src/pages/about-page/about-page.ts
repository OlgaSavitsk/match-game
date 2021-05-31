import '../pages.scss';
import { Component } from 'component';
import { AboutField } from '../../components/about-field/about-field';
import { FormRegistr } from '../../components/form/form-registr';
import { ButtonRegistr } from '../../shared/button/button-registr';
import { Button } from '../../shared/button/button';


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
      new FormRegistr(this.aboutPage/* , this.db */).render();
    };
    this.button = new Button();
    this.aboutPage.prepend(this.button.element);
    this.button.element.innerHTML = `
      <a class="button__link" href="#game">START GAME</a>
    `;
    return this.aboutPage;
}
}
