import { SQLite } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SingupPage } from '../singup/singup';
import 'rxjs/add/operator/map';
import { Http, HttpModule } from '@angular/http';





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public sing =SingupPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpM: HttpModule,
              public http: Http) {
  }

  validateLogin(){




}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
