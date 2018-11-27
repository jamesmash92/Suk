import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import {User} from '../../../environments/environment';

import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private aFuth: AngularFireAuth,
    private afdb: AngularFireDatabase) {
  }

async register(user: User) {
  try {
  const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  console.log(result);

  this.navCtrl.push('ProfilePage');


} catch (e) {
  console.log(e);

}
}
}
