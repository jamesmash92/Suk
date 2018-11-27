import { Component } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase} from 'angularfire2/database';

import { Devotions } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MyDevotionsProvider } from '../../services/churchservice.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-all-my-devotions',
  templateUrl: './all-my-devotions.page.html',
  styleUrls: ['./all-my-devotions.page.scss'],
})
export class AllMyDevotionsPage {

  devotionsDataList: Observable<Devotions[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private devotionsprovider: MyDevotionsProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.devotionsDataList = this.devotionsprovider
                     .getDevotions()
                     .snapshotChanges()
                     .pipe(map(
                       changes => {
                         return changes.map(c => ({
                           key: c.payload.key, ...c.payload.val(),
                         }));
                       }
                     ));
               }
             }

  }
