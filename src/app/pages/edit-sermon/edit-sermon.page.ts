import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

import { Sermon } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SermonProvider } from '../../services/churchservice.service';

@Component({
  selector: 'app-edit-sermon',
  templateUrl: './edit-sermon.page.html',
  styleUrls: ['./edit-sermon.page.scss'],
})
export class EditSermonPage {

  sermon: Sermon;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private toast: ToastController,
              private sermonedit: SermonProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.sermon = this.navParams.get('sermon');
          }

            saveSermon(sermon: Sermon) {
              this.sermonedit.editSermon(sermon).then(() => {
                this.navCtrl.setRoot('ListOfSermonsInSettingsPage');
              });
            }

            removeSermon(sermon: Sermon) {
              this.sermonedit.removeSermon(sermon).then(() => {

                this.navCtrl.setRoot('ListOfSermonsInSettingsPage');
              });
            }
          }
