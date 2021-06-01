import './button-form.scss';
import { Component } from '../../../component';
import { DataBase } from '../../indexedDB';
import { PopupCover } from '../../popup/popup-cover/popup-cover';

import { ButtonAdd } from './button-add';
import { ButtonCancel } from './button-cancel';

export class ButtonForm implements Component {
  private readonly buttonForm: HTMLElement;

  public iDB: DataBase;

  private buttonAdd: ButtonAdd;

  popupCover: PopupCover;

  constructor(private readonly root: HTMLElement/* , private readonly db: DataBase */) {
    this.buttonForm = document.createElement('div');
    this.buttonForm.classList.add('form__button');
    const popupCover = new PopupCover();
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonForm);
    this.buttonForm.appendChild(new ButtonAdd(this.buttonForm).render()).onclick = () => {
      // this.db.write()
    };
    this.buttonForm.appendChild(new ButtonCancel(this.buttonForm).render());

    return this.buttonForm;
  }
}
