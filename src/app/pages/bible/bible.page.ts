import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})

export class BiblePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblePage');
  }

}
