import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  user = {
    name : '',
    flastname : '',
    mlastname : '',
    email : '',
    username : '',
    password : '',
    roll : ''
 };


  constructor(public navCtrl: NavController,
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

  doClean() {
    console.log(this.user);
    this.user.name = '';
    this.user.flastname = '';
    this.user.mlastname = '';
    this.user.email = '';
    this.user.username = '';
    this.user.password = '';
    this.user.roll = '';
    console.log("Done it perfectly");
  }

  doRegister(){


  }
}
