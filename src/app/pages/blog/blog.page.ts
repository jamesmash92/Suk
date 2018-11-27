import { Component } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import {Blog } from '../../../environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})

export class BlogPage {

  blog: Blog;

   constructor(public navCtrl: NavController,
               public navParams: NavParams) {}
             ionViewWillLoad() {
             this.blog = this.navParams.get('blog');
           }
        }
