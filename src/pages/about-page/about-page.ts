import { Component } from 'component';
import { FormContainer } from '../../components/form/form-container/form-container';
import { AboutField } from '../../components/about-field/about-field';
import { Header } from '../../components/header/header';
import '../pages.scss';
import { FormRegistr } from '../../components/form/form-registr';

export class AboutPage implements Component {
  private readonly aboutPage: HTMLElement;
  public header: Header;
  private aboutField: AboutField;

  constructor(private readonly root: HTMLElement) {
    this.aboutPage = document.createElement('div');
    this.aboutPage.classList.add('about-page');
  }

  render(): HTMLElement {
    this.root.appendChild(this.aboutPage);
    this.aboutPage.appendChild(new AboutField(this.aboutPage).render());
    this.aboutPage.appendChild(new FormRegistr(this.aboutPage).render())
    return this.aboutPage;
  }
}
