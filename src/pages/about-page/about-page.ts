import '../pages.scss';
import { Component } from 'component';
import { AboutField } from '../../components/about-field/about-field';
import { FormRegistr } from '../../components/form/form-registr';
import { ButtonRegistr } from '../../shared/button/button-registr';
import { PopupCover } from '../../components/popup/popup-cover/popup-cover';
import { Button } from '../../shared/button/button';
import { DataBase } from '../../components/storage';

export class AboutPage implements Component {
  private readonly aboutPage: HTMLElement;
  private buttonRegistr: ButtonRegistr;
  private button: Button;
  private popupCover: PopupCover;
  private formRegistr: FormRegistr;

  constructor(private readonly root: HTMLElement,/*   private readonly db: DataBase */) {
    this.aboutPage = document.createElement('div');
    this.aboutPage.classList.add('about-page');
  }

  render(): HTMLElement {
    this.root.appendChild(this.aboutPage);
    this.aboutPage.appendChild(new AboutField(this.aboutPage).render());
   // this.popupCover = new PopupCover();
   // this.aboutPage.appendChild(this.popupCover.element);
    this.root.appendChild(new ButtonRegistr(this.aboutPage).render()).onclick = () => {
      new FormRegistr(this.aboutPage/* , this.db */).render();
     // this.popupCover.element.classList.add('show');
    };
    this.button = new Button();
    this.aboutPage.prepend(this.button.element);
    this.button.element.innerHTML = `
      <a class="button__link" href="#game">START GAME</a>
    `;
    return this.aboutPage;
}
}
