import './button-form.scss';
import { Component } from '../../../component';
import { DataBase } from '../../indexedDB';

import { ButtonAdd } from './button-add';
import { ButtonCancel } from './button-cancel';
import Button from '../../../shared/button/button';

const buttonadd = document.querySelector('.form__button_colored');
export class ButtonForm implements Component {
  private readonly buttonForm: HTMLElement;

  public db: DataBase;

  private buttonAdd: ButtonAdd;

  constructor(private readonly root: HTMLElement /* , private readonly db: DataBase */) {
    this.buttonForm = document.createElement('div');
    this.buttonForm.classList.add('form__button');
    this.db = new DataBase();
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonForm);
    this.buttonForm.appendChild(new ButtonAdd(this.buttonForm).render()).onclick = () => {
     this.db.init('olgasav');
      console.log('bd1')

    };
    this.buttonForm.appendChild(new ButtonCancel(this.buttonForm).render());

    return this.buttonForm;
  }
}
export default ButtonForm;
