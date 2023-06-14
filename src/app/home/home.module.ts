import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { SwiperModalComponent } from '../components/swiper-modal/swiper-modal.component';
import { SeeMoreModalComponent } from '../components/see-more-modal/see-more-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, SwiperModalComponent, SeeMoreModalComponent],
})
export class HomePageModule {}
