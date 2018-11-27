import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-sermoncomments',
  templateUrl: './sermoncomments.page.html',
  styleUrls: ['./sermoncomments.page.scss'],
})

export class SermoncommentsPage {

  public event = {
    month: '2018-05-29',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SermoncommentsPage');
  }

}
