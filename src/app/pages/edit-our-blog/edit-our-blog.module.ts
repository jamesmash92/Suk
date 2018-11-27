import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditOurBlogPage } from './edit-our-blog.page';

const routes: Routes = [
  {
    path: '',
    component: EditOurBlogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditOurBlogPage]
})
export class EditOurBlogPageModule {}
