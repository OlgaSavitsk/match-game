import './button-form.scss';
import { Component } from '../../../component';
import iDB, { DataBase } from '../../../components/storage';
//import { DataBase } from '../../../components/storage';


export class ButtonAdd implements Component {
  [x: string]: any;
  private readonly buttonAdd: HTMLElement;
  public iDB: DataBase;
  public onClick: () => void;
  onclick: () => void;

  constructor(private readonly root: HTMLElement) {
    this.buttonAdd = document.createElement('button');
    //this.buttonAdd.setAttribute('type', 'file')
    this.buttonAdd.classList.add('form__button_colored');
    this.buttonAdd.innerHTML = 'Add user';
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonAdd)
    return this.buttonAdd;
  }
}


