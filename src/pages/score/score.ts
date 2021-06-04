import { Component } from '../../components/component';
import { Avatar } from '../../components/avatar/avatar';
import { ScoreField } from './score-field/score-field';
import '../pages.scss';
import { Button } from '../../shared/button/button';
import { DataBase } from '../../components/indexedDB';

export class ScorePage implements Component {
  public scorePage: HTMLElement;

  private scoreField: ScoreField;

  private avatar: Avatar;

  private button: Button;

  constructor(private readonly root: HTMLElement) {
    this.scorePage = document.createElement('div');
    this.scorePage.classList.add('score-page');
    new DataBase().initScore('olgasav', 2);
  }

  render(): HTMLElement {
    this.root.appendChild(this.scorePage);
    this.scorePage.appendChild(new ScoreField(this.scorePage).render());
    this.button = new Button();
    this.scorePage.prepend(this.button.element);
    this.avatar = new Avatar();
    this.scorePage.prepend(this.avatar.element);
    return this.scorePage;
  }
}
