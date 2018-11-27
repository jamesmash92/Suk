import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';

import { AngularFireDatabase} from 'angularfire2/database';

import { Sermon } from '../../../environments/environment';

import { Observable } from 'rxjs';

import { SermonProvider } from '../../services/churchservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-of-the-verse-of-the-day',
  templateUrl: './list-of-the-verse-of-the-day.page.html',
  styleUrls: ['./list-of-the-verse-of-the-day.page.scss'],
})

export class ListOfSermonsInSettingsPage {
  sermonData: Observable<Sermon[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private toast: ToastController,
               private sermon: SermonProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.sermonData = this.sermon
                     .getSermon()
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
