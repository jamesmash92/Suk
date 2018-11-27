import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SermoncommentsPage } from './sermoncomments.page';

const routes: Routes = [
  {
    path: '',
    component: SermoncommentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SermoncommentsPage]
})
export class SermoncommentsPageModule {}
