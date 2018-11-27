import { Component } from '@angular/core';

import { NavController, NavParams} from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

import { Announcements } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MyAnnouncementsProvider } from '../../services/churchservice.service';

@Component({
  selector: 'app-edit-our-announcements',
  templateUrl: './edit-our-announcements.page.html',
  styleUrls: ['./edit-our-announcements.page.scss'],
})

export class EditOurAnnouncementsPage {
  announcements: Announcements;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editannouncementsprovider: MyAnnouncementsProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.announcements = this.navParams.get('announcements');
          }

            saveAnnouncements(announcements: Announcements) {
              this.editannouncementsprovider.editAnnouncements(announcements).then(() => {
                this.navCtrl.navigateForward('ListOfOurAnnouncementsPage');
              });
            }

            removeAnnouncements(announcements: Announcements) {
              this.editannouncementsprovider.removeAnnouncements(announcements).then(() => {

                this.navCtrl.navigateForward('ListOfOurAnnouncementsPage');
              });
            }
          }
