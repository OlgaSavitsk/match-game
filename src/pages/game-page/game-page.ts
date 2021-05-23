import { Component } from 'component';
import { Game } from '../../components/game/game';
import { ImageCategoryModel } from 'models/image-category-model';
import { Header } from '../../components/header/header';
import '../pages.scss';

export class GamePage implements Component {
  private readonly gamePage: HTMLElement;
  private header: Header;
  private game: Game;

  constructor (private readonly root: HTMLElement) {
    this.gamePage = document.createElement('div');
    this.gamePage.classList.add('game-page');
  }

  render(): HTMLElement {
    this.root.appendChild(this.gamePage);
    this.game = new Game();
    this.gamePage.appendChild(this.game.element);
    this.start();
    return this.gamePage;
  }

  async start() {
    const response = await fetch('/images.json');
    const categories: ImageCategoryModel[] = await response.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.initGame(images);
  }
}
