import './rules.scss';
import { Component } from '../../component';
import { RuleStart } from '../rule-start/rule-start';

export class Rules implements Component {
  private readonly rules: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.rules = document.createElement('div');
    this.rules.classList.add('rules');
    this.rules.innerHTML = `
    <div class="rules__block">
        <div class="rules__number">1</div>
        <p class="rules__text">Register new player in game</p>
      </div>
      <div class="rules__block">
        <div class="rules__number">2</div>
        <p class="rules__text">Configure your game settings</p>
      </div>
      </div>
    `;
  }

  render(): HTMLElement {
    this.root.appendChild(this.rules);
    this.rules.appendChild(new RuleStart(this.rules).render());
    return this.rules;
  }
}
