import { Header } from "./components/header/header";
import { Game } from "./components/game/game";
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly game: Game;
  private readonly header: Header;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
    this.header = new Header();
    this.rootElement.prepend(this.header.createHeader());
  }
}

 /*  async start() {
    const res = await fetch('./images.json');
    const categoryes: ImageCategoryModel[] = await res.json();
    const cat = categoryes[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.initGame(images);
  }
 } */
