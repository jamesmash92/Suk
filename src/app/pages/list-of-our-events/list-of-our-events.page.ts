import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { AngularFireDatabase} from 'angularfire2/database';

import { Events } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MyEventsProvider } from '../../services/churchservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-of-our-events',
  templateUrl: './list-of-our-events.page.html',
  styleUrls: ['./list-of-our-events.page.scss'],
})
export class ListOfOurEventsPage {

  eventsDataList: Observable<Events[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private eventsprovider: MyEventsProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.eventsDataList = this.eventsprovider
                     .getEvents()
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
