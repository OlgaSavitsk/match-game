import './button-form.scss';
import { Component } from '../../../component';
import { DataBase } from '../../indexedDB';

import { ButtonAdd } from './button-add';
import { ButtonCancel } from './button-cancel';
import Button from '../../../shared/button/button';

const buttonadd = document.querySelector('.form__button_colored');
export class ButtonForm implements Component {
  private readonly buttonForm: HTMLElement;

  public iDB: DataBase;

  private buttonAdd: ButtonAdd;

  constructor(private readonly root: HTMLElement /* , private readonly db: DataBase */) {
    this.buttonForm = document.createElement('div');
    this.buttonForm.classList.add('form__button');
    this.iDB = new DataBase();
    //let buttonAdd = new ButtonAdd();
    buttonadd?.addEventListener('click', () => {
      this.iDB.write();
      console.log('bd')
    })
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonForm);
    this.buttonForm.appendChild(new ButtonAdd(this.buttonForm).render()).onclick = () => {
      this.iDB.write();
      console.log('bd')

    };
    this.buttonForm.appendChild(new ButtonCancel(this.buttonForm).render());

    return this.buttonForm;
  }
}
export default ButtonForm;
