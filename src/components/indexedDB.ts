interface MyRecord {
  name: string;
  surname: string;
  email: string;
  id?: IDBValidKey;
}
export class DataBase {
  inputName = document.getElementsByTagName('input')[0] ;

  inputSurname = document.getElementsByTagName('input')[1] ;

  inputEmail = document.getElementsByTagName('input')[2] ;

  scoreList = document.getElementById('scorelist') as HTMLUListElement;

  usernameValue: string;

  surnameValue: string;

  emailValue: string;

  public db: IDBDatabase;

  name: string;

  email: string;

  async init(dbName: string, version: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open('olgasav', 2);
    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      const store = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
      store.createIndex('name', 'name');
      store.createIndex('surname', 'surname');
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('score', 'total');
    };
    openRequest.onsuccess = async () => {
      this.db = openRequest.result;
      await this.write('users');
    };
  }

  async initScore(dbName: string, version: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open('olgasav', 2);
    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      const store = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
      store.createIndex('name', 'name');
      store.createIndex('surname', 'surname');
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('score', 'total');
    };
    openRequest.onsuccess = async () => {
      this.db = openRequest.result;
      await this.readFilter('users');
    };
  }

  async readAll(collection: string) {
    const tx = this.db.transaction('users');
    const store = tx.objectStore('users');
    const users = await store.getAll();
    tx.oncomplete = () => {
    };
  }

  async write(collection: string) {
    const inputNameValue = this.inputName.value;
    const inputSurnameValue = this.inputSurname.value;
    const inputEmailValue = this.inputEmail.value;
    const userData = {
      name: inputNameValue,
      surname: inputSurnameValue,
      email: inputEmailValue,
      score: 0,
    };
    try {
      await this.db.transaction('users', 'readwrite')
        .objectStore('users')
        .put(userData);
    } catch { }
  }

  async readFilter(collection: string) {
    const scoreList = document.querySelector('.score-field') as HTMLElement;

    const transaction = await this.db.transaction('users');
    const store = transaction.objectStore('users');
    const result = store.openCursor(null, 'next');
    result.onsuccess = () => {
      const cursor = result.result;
      if (cursor) {
        scoreList.innerHTML += `<ul id ="scorelist" class="score__list"><li class="score__avatar"></li><li class="score__name" data-key="${cursor.value.id}">${cursor.value.name}  ${cursor.value.surname}</li>
           <li class="score__email">${cursor.value.email}</li></ul>`;

        cursor.continue('error');
      }
    };
  }
}

const db = new DataBase();
export default db;

// let deleteRequest = indexedDB.deleteDatabase('olgasav')
