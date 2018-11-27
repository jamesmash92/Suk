import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { User } from '../../../environments/environment';

import { AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-logtobe',
  templateUrl: './logtobe.page.html',
  styleUrls: ['./logtobe.page.scss'],
})

export class LogtobePage {
  user = {} as User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth) {
    }

  async login(user: User) {
    try {
    const result = this.aFauth.auth.signInWithEmailAndPassword(user.email, user.password);

  if (result) {
    this.navCtrl.setRoot('EditdetailsPage');
    }
  } catch (e) {
    console.log(e);
  }
  }
  }
