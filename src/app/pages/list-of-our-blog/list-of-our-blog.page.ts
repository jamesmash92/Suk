import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { AngularFireDatabase} from 'angularfire2/database';

import { Blog } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MyBlogProvider } from '../../services/churchservice.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-of-our-blog',
  templateUrl: './list-of-our-blog.page.html',
  styleUrls: ['./list-of-our-blog.page.scss'],
})

export class ListOfOurBlogPage {

  blogDataList: Observable<Blog[]>;

   constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private blogprovider: MyBlogProvider,
               private afDatabase: AngularFireDatabase) {


                 {
                     this.blogprovider = this.blogprovider
                     .getBlog()
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
