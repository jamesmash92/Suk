import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

import { Verse } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MyVerseProvider } from '../../services/churchservice.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.page.html',
  styleUrls: ['./editdetails.page.scss'],
})

export class EditVerseOfTheDayPage {

  verse: Verse;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editverseprovider: MyVerseProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.verse = this.navParams.get('verse');
          }

            saveVerse(verse: Verse) {
              this.editverseprovider.editVerse(verse).then(() => {
                this.navCtrl.setRoot('ListOfTheVerseOfTheDayPage');
              });
            }

            removeVerse(verse: Verse) {
              this.editverseprovider.removeVerse(verse).then(() => {

                this.navCtrl.setRoot('ListOfTheVerseOfTheDayPage');
              });
            }
          }
