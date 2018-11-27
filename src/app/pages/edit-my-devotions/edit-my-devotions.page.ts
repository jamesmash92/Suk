import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

import { Devotions } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MyDevotionsProvider } from '../../services/churchservice.service';

@Component({
  selector: 'app-edit-my-devotions',
  templateUrl: './edit-my-devotions.page.html',
  styleUrls: ['./edit-my-devotions.page.scss'],
})

export class EditMyDevotionsPage {
  devotions: Devotions;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editdevotionsprovider: MyDevotionsProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.devotions = this.navParams.get('devotions');
          }

            saveDevotions(devotions: Devotions) {
              this.editdevotionsprovider.editDevotions(devotions).then(() => {
                this.navCtrl.navigateForward('AllMyDevotionsPage');
              });
            }

            removeDevotions(devotions: Devotions) {
              this.editdevotionsprovider.removeDevotions(devotions).then(() => {

                this.navCtrl.navigateForward('AllMyDevotionsPage');
              });
            }
          }
