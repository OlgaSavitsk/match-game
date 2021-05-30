import { ScoreField } from '../../components/score-field/score-field';
import { Component } from '../../component';
import '../pages.scss';
import { Button } from '../../shared/button/button';
import { Avatar } from '../../components/avatar/avatar';


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
