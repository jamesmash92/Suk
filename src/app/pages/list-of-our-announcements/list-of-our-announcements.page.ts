import { Component} from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { AngularFireDatabase} from 'angularfire2/database';

import { Observable } from 'rxjs';
import { Announcements } from '../../../environments/environment';
import { MyAnnouncementsProvider } from '../../services/churchservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-of-our-announcements',
  templateUrl: './list-of-our-announcements.page.html',
  styleUrls: ['./list-of-our-announcements.page.scss'],
})

export class ListOfOurAnnouncementsPage {

  announcementsDataList: Observable<Announcements[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private announcementsprovider: MyAnnouncementsProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.announcementsDataList = this.announcementsprovider
                     .getAnnouncements()
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
