 export class DataBase {
   public db: IDBDatabase | null;

    //private database: IDBDatabase


    init(dbName: string) {
      const iDB = window.indexedDB;
      const openRequest = iDB.open('olgasav');
      openRequest.onupgradeneeded = () => {
        let database = openRequest.result;
        let store = database.createObjectStore('users', {keyPath: 'id', autoIncrement: true});
        store.createIndex('name', 'name');
        store.createIndex('surname', 'surname');
        store.createIndex('email', 'email', {unique: true});
        store.createIndex('score', 'total');
        this.db = database
      }
      openRequest.onsuccess = () => {
        this.db = openRequest.result;
       // this.write()
      }
    }

    write() {
      //if (!this.db) throw Error('db root element not found');
      let transaction = this.db!.transaction('users', 'readwrite')
      let store = transaction.objectStore('users');
      let result = store?.add({name: 'nam', surname: 'sam', email: 'esm'});
      result.onsuccess = () => {
        console.log('complete', result?.result);
      }
      transaction.onerror = () => {
        console.log('error', result.error);
      }
      transaction.onabort = () => {
        console.log('abort');
      }
    }
    readAll() {
      //if (!this.db) throw Error('db root element not found');
      let transaction = this.db!.transaction('users', 'readonly');
      let store = transaction.objectStore('users');
      let result = store.getAll();
      transaction.oncomplete = () => {
        console.log(result.result)
      }
    }

    readFilter() {
      //if (!this.db) throw Error('db root element not found');
      let transaction = this.db!.transaction('users', 'readonly');
      let store = transaction.objectStore('users');
      let resData: Array<any> = []
      let result = store.index('email').openCursor(null, 'next');
      result.onsuccess = () => {
        let cursor = result.result;
        if(cursor) {
          console.log(cursor.value);
          if (cursor.value.email[0] === 'a') {
            resData.push(cursor.value)
          }
          cursor.continue()
        }
      }
      transaction.oncomplete = () => {
        console.log(resData)
      }
    }
  }

const db = new DataBase();
export default db;
