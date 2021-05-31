import { Component } from '../../component';
import { Avatar } from '../../components/avatar/avatar';
import { ScoreField } from '../../components/score-field/score-field';
import '../pages.scss';
import { Button } from '../../shared/button/button';

export class ScorePage implements Component {
  private readonly scorePage: HTMLElement;
  private scoreField: ScoreField;
  private avatar: Avatar;
  private button: Button;

  constructor(private readonly root: HTMLElement) {
    this.scorePage = document.createElement('div');
    this.scorePage.classList.add('score-page');

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
