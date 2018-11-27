import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { User } from '../../../environments/environment';
import { RegisterPage} from '../register/register.page';
import { DefaultPage} from '../default/default.page';

import { AngularFireAuth} from 'angularfire2/auth';

import { ProfiledetailPage } from '../profiledetail/profiledetail.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  user = {} as User;

      constructor(public navCtrl: NavController,
                  public navParams: NavParams,
                  private afAuth: AngularFireAuth) {}

                  async login(user: User) {
                    try {
                      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

                      if (result) {
                        this.navCtrl.setRoot('ChurchTabsPage');

                        console.log(result);
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }

                  register() {
                    this.navCtrl.push('DefaultPage');
                  }
                }
