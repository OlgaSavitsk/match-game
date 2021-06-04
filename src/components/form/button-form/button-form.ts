import './button-form.scss';
import { ScoreList } from 'pages/score/score-list/score-list';

import { Component } from '../../component';
import Button from '../../../shared/button/button';
import { DataBase } from '../../indexedDB';
import form, { Form } from '../form/form';
import { Input } from '../form/input';

import { ButtonAdd } from './button-add';
import { ButtonCancel } from './button-cancel';

const buttonadd = document.querySelector('.form__button_colored');
export class ButtonForm implements Component {
  private readonly buttonForm: HTMLElement;

  private db: DataBase = new DataBase();

  private write: Function;

  private input: Input;

  usernameValue: string;

  surnameValue: string;

  emailValue: string;

  // public db: DataBase;
  inputName: Input;

  inputSurname: Input;

  inputEmail: Input;

  userData: {};

  constructor(private readonly root: HTMLElement /* , private readonly db: DataBase */) {
    this.buttonForm = document.createElement('div');
    this.buttonForm.classList.add('form__button');
  }

  get() {
    const inputName = document.getElementsByTagName('input')[0];
    const inputSurname = document.getElementsByTagName('input')[1];
    const inputEmail = document.getElementsByTagName('input')[2];
    const inputNameValue = inputName.value;
    const inputSurnameValue = inputSurname.value;
    const inputEmailValue = inputEmail.value;
    const userData = {
      name: inputNameValue,
      surname: inputSurnameValue,
      email: inputEmailValue,
    };
    return userData;
  }

  render(): HTMLElement {
    this.root.appendChild(this.buttonForm);
    this.buttonForm.appendChild(new ButtonAdd(this.buttonForm).render()).onclick = async () => {
      await this.db.init('olgasav', 2);
    };
    this.buttonForm.appendChild(new ButtonCancel(this.buttonForm).render());

    return this.buttonForm;
  }
}
export default ButtonForm;
