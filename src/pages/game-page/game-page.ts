import { Component } from 'component';
import { Game } from '../../components/game/game';
import { ImageCategoryModel } from 'models/image-category-model';
import '../pages.scss';
import { Avatar } from '../../components/avatar/avatar';
import { SettingPage } from '../../pages/setting/setting';

export class GamePage implements Component {
  private readonly gamePage: HTMLElement;
  private game: Game;
  private avatar: Avatar;
  private images: string[]

  constructor (private readonly root: HTMLElement) {
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

    async start() {
     // const categories:
    const response = await fetch('/images.json');
    const categories: ImageCategoryModel[] = await response.json();
    let cardCategory = localStorage.getItem('card-category');
    let lavelCategory = localStorage.getItem('lavel-category');
    if(cardCategory === 'animals') {
      const cat = categories[0];
      const images = cat.images.map((name) => `${cat.category}/${name}`);
    }
    if(cardCategory === 'birds') {
      const cat = categories[1];
      const images = cat.images.map((name) => `${cat.category}/${name}`);
    }
    const cat = categories[0, 1];
    const images = cat.images.map((name: string) => `${cat.category}/${name}`);
    if(lavelCategory === '4x4') {
      this.game.initGame(images, 0, 8);
      }
    if(lavelCategory === '6x6') {
      this.game.initGame(images, 0, 18);
      }
  }
}
