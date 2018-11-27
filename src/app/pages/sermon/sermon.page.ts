import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

import { Sermon } from '../../../environments/environment';


@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.page.html',
  styleUrls: ['./sermon.page.scss'],
})

export class SermonPage {

  sermon: Sermon;

   constructor(public navCtrl: NavController,
               public navParams: NavParams) {}
             ionViewWillLoad() {
             this.sermon = this.navParams.get('sermon');
           }
        }
