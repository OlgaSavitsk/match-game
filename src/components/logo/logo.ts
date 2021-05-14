import './logo.scss';
import { BaseComponent } from "../base-component";

export class Logo extends BaseComponent {
  public node: HTMLElement;

  constructor() {
  super('div', ['logo'])
  }
}

let logo = new Logo();

/* const logo = (name: string, handlerClick: () => void): HTMLElement => {
  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.innerHTML = 'MATCH';
  return logo;
}; */
