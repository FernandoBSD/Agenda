import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {
  db: SQLiteObject = null;

  constructor(public http: HttpClient) {
    console.log('Hello TasksServiceProvider Provider');
  }

  setDatabase(db: SQLiteObject){
    if (this.db == null) {
      this.db = db;

    }
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, user TEXT, password TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * FROM users';
    return this.db.executeSql(sql, [])
    .then(response => {
      let user = [];
      for (let index = 0; index < response.rows.length; index++) {
        user.push( response.rows.item(index) );
      }
      return Promise.resolve( user );
    })
    .catch(error => Promise.reject(error));
  }

  create(compilation: any){
    let sql = 'INSERT INTO users(user, password) VALUES(?,?)';
    return this.db.executeSql(sql, [compilation.user, compilation.password]);
  }

  update(compilation: any){
    let sql = 'UPDATE users SET user=?, password=? WHERE id=?';
    return this.db.executeSql(sql, [compilation.title, compilation.completed, compilation.id]);
  }

  delete(compilation: any){
    let sql = 'DELETE FROM users WHERE id=?';
    return this.db.executeSql(sql, [compilation.id]);
  }





}
