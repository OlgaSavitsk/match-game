import { Component } from 'component';

import { ImageCategoryModel } from 'models/image-category-model';

import '../pages.scss';
import { Avatar } from '../../components/avatar/avatar';

import { Game } from '../../components/game/game';

export class GamePage implements Component {
  private readonly gamePage: HTMLElement;

  private game: Game;

  private avatar: Avatar;

  private images: string[];

  constructor(private readonly root: HTMLElement) {
    this.gamePage = document.createElement('div');
    this.gamePage.classList.add('game-page');
  }

  render(): HTMLElement {
    this.root.appendChild(this.gamePage);
    this.game = new Game();
    this.gamePage.appendChild(this.game.element);
    this.avatar = new Avatar();
    this.gamePage.prepend(this.avatar.element);
    this.start();
    return this.gamePage;
  }

  async start(): Promise<void> {
    const response = await fetch('/images.json');
    const categories: ImageCategoryModel[] = await response.json();

    const cardCategory = localStorage.getItem('card-category');
    const lavelCategory = localStorage.getItem('lavel-category');
    if (cardCategory === 'animals') {
      const cat = categories[0];
      const images = cat.images.map(name => `${cat.category}/${name}`);
      this.game.initGame(images, 0, 2);
    }
    if (cardCategory === 'birds') {
      const cat = categories[1];
      const images = cat.images.map(name => `${cat.category}/${name}`);
      this.game.initGame(images, 0, 8);
    }
    if (lavelCategory === '6x6') {
      const cat = categories[0];
      const images = cat.images.map(name => `${cat.category}/${name}`);
      this.game.initGame(images, 0, 18);
    }
    if (lavelCategory === '6x6') {
      const cat = categories[1];
      const images = cat.images.map(name => `${cat.category}/${name}`);
      this.game.initGame(images, 0, 18);
    }
  }
}
export default GamePage;
