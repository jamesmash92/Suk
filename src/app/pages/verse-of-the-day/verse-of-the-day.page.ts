import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { Verse } from '../../../environments/environment';

@Component({
  selector: 'app-verse-of-the-day',
  templateUrl: './verse-of-the-day.page.html',
  styleUrls: ['./verse-of-the-day.page.scss'],
})

export class VerseOfTheDayPage {

  verse: Verse;

   constructor(public navCtrl: NavController,
               public navParams: NavParams) {}
             ionViewWillLoad() {
             this.verse = this.navParams.get('verse');
           }
        }
