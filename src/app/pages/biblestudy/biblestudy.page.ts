import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.page.html',
  styleUrls: ['./biblestudy.page.scss'],
})
export class BiblestudyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblestudyPage');
  }

}
