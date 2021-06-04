import './about-container.scss';
import { Component } from '../../../components/component';
import { AboutDescriptions } from '../about-descriptions/about-descriptions';
import { Rules } from '../../../components/rules/rules';

export class AboutContainer implements Component {
  private readonly aboutContainer: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.aboutContainer = document.createElement('div');
    this.aboutContainer.classList.add('about__container');
  }

  render(): HTMLElement {
    this.root.appendChild(this.aboutContainer);
    this.aboutContainer.appendChild(new Rules(this.aboutContainer).render());
    this.aboutContainer.appendChild(new AboutDescriptions(this.aboutContainer).render());
    return this.aboutContainer;
  }
}
