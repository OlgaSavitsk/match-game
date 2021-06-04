import './score-field.scss';
import { Component } from '../../../components/component';
import { ScoreList } from '../score-list/score-list';

export class ScoreField implements Component {
  private scoreField: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.scoreField = document.createElement('div');
    this.scoreField.classList.add('score-field');
    this.scoreField.innerHTML = `
      <h2 class="score__title">Best players</h2>
    `;
  }

  render() {
    this.root.appendChild(this.scoreField);
    this.scoreField.appendChild(new ScoreList(this.scoreField).render());
    return this.scoreField;
  }
}
