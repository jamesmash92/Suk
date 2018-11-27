import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Verse } from '../../../environments/environment';
import { MyVerseProvider } from '../../services/churchservice.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-youth-ministry',
  templateUrl: './youth-ministry.page.html',
  styleUrls: ['./youth-ministry.page.scss'],
})

export class YouthMinistryPage {
  youth: string;
  [x: string]: any;
  verseDataList: Observable<Verse[]>;

constructor(public navCtrl: NavController, public navParams: NavParams,  private verseprovider: MyVerseProvider) {
  {
      this.verseDataList = this.verseprovider
      .getVerse()
      .snapshotChanges()
      .pipe(map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val(),
          }));
        }
      ));
}

    this.youth = 'welcome';
}

ionViewDidLoad() {
  console.log('ionViewDidLoad YouthMinistryPage');
}

}
