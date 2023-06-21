import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomeWebPageRoutingModule } from './home-web-routing.module';
import { SwiperModule } from 'swiper/angular';
import { HomeWebPage } from './home-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    ReactiveFormsModule,
    IonicModule,
    HomeWebPageRoutingModule
  ],
  declarations: [HomeWebPage]
})
export class HomeWebPageModule {}
