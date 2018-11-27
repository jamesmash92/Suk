import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';

import { Events } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MyEventsProvider } from '../../services/churchservice.service';

@Component({
  selector: 'app-edit-our-events',
  templateUrl: './edit-our-events.page.html',
  styleUrls: ['./edit-our-events.page.scss'],
})

export class EditOurEventsPage {

  events: Events;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afauth: AngularFireAuth,
              private editeventsprovider: MyEventsProvider,
              private afDatabase: AngularFireDatabase) {
            }
            ionViewWillLoad() {
            this.events = this.navParams.get('events');
          }

            saveEvents(events: Events) {
              this.editeventsprovider.editEvents(events).then(() => {
                this.navCtrl.setRoot('ListOfOurEventsPage');
              });
            }

            removeEvents(events: Events) {
              this.editeventsprovider.removeEvents(events).then(() => {

                this.navCtrl.setRoot('ListOfOurEventsPage');
              });
            }
          }
