import './timer.scss';
import { BaseComponent } from '../base-component';


export class Canvas extends BaseComponent{
canvas: HTMLCanvasElement;
context: CanvasRenderingContext2D;
width: number;
heigth: number;

  constructor() {
    super('canvas', ['timer']);
   /*  this.width = canvas.width;
    this.heigth = canvas.height; */
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Failed to getContext from canvas element");
    }
  }

 timer() {
   this.context.fillText(`00:00`, 0, 20);
 }

/*  setInterval(() => {
  }, 1000); */
}

