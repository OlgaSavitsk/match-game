export class DataBase {
  public db: IDBDatabase | null;

  // private database: IDBDatabase

  init(dbName: string) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open('olgasav');
    openRequest.onupgradeneeded = () => {
      const database = openRequest.result;
      const store = database.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
      store.createIndex('name', 'name');
      store.createIndex('surname', 'surname');
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('score', 'total');
      this.db = database;
    };
    openRequest.onsuccess = () => {
      this.db = openRequest.result;
      // this.write()
    };
  }

  write() {
    // if (!this.db) throw Error('db root element not found');
    const transaction = this.db!.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');
    const result = store?.add({ name: 'nam', surname: 'sam', email: 'esm' });
    result.onsuccess = () => {
      console.log('complete', result?.result);
    };
    transaction.onerror = () => {
      console.log('error', result.error);
    };
    transaction.onabort = () => {
      console.log('abort');
    };
  }

  readAll() {
    // if (!this.db) throw Error('db root element not found');
    const transaction = this.db!.transaction('users', 'readonly');
    const store = transaction.objectStore('users');
    const result = store.getAll();
    transaction.oncomplete = () => {
      console.log(result.result);
    };
  }

  readFilter() {
    // if (!this.db) throw Error('db root element not found');
    const transaction = this.db!.transaction('users', 'readonly');
    const store = transaction.objectStore('users');
    const resData: Array<any> = [];
    const result = store.index('email').openCursor(null, 'next');
    result.onsuccess = () => {
      const cursor = result.result;
      if (cursor) {
        console.log(cursor.value);
        if (cursor.value.email[0] === 'a') {
          resData.push(cursor.value);
        }
        cursor.continue();
      }
    };
    transaction.oncomplete = () => {
      console.log(resData);
    };
  }
}

const db = new DataBase();
export default db;

/*  const iDB = window.indexedDB;
  let database: IDBDatabase | null = null;

  let openRequest = iDB.open('olgasav');
  openRequest.onupgradeneeded = () => {
    let database = openRequest.result;
    console.log('running')
    let store = database.createObjectStore('users', {keyPath: 'id', autoIncrement: true});
    store.createIndex('name', 'name');
    store.createIndex('surname', 'surname');
    store.createIndex('email', 'email', {unique: true});
    store.createIndex('score', 'total');
  }

  openRequest.onsuccess = () => {
    database = openRequest.result;
    let transaction = database.transaction('users', 'readwrite')
    let store = transaction.objectStore('users');
    let result = store.add({name: 'name', surname: 'surname', email: 'emaila', score: '45'});
    transaction.oncomplete = () => {
      console.log('complete',result.result);
    }
    transaction.onerror = () => {
      console.log('error', result.error);
    }
    transaction.onabort = () => {
      console.log('abort');
    }
  } */

/* let el = document.createElement('button');
el.textContent ='list';
document.body.append(el);
el.onclick = () => {
  let transaction = database!.transaction('users', 'readonly');
      let store = transaction.objectStore('users');
      let result =store. getAll();

      transaction.oncomplete = () => {
        console.log(result.result)
      }
}

let elem = document.createElement('button');
elem.textContent ='filter';
document.body.append(elem);
elem.onclick = () => {

  let transaction = database!.transaction('users', 'readonly');
      let store = transaction.objectStore('users');
      let result =store.index('email').openCursor(null, 'next');
      let resData: Array<any> = []

      result.onsuccess = () => {

  let cursor = result.result;

  if(cursor) {
    console.log(cursor.value)
    cursor.continue();
  }

  if(cursor?.value.email[0] == 'e') {
    resData.push(cursor?.value)
  }
}
      transaction.oncomplete = () => {
        console.log(result.result)
      }
}
 */
// let deleteRequest = indexedDB.deleteDatabase('olgasav')
