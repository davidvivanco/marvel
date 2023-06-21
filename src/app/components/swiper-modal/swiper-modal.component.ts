import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroesData } from 'src/app/models/api';
import { AppState } from 'src/app/store/state';
import { StoreService } from 'src/app/store/store.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper-modal',
  templateUrl: './swiper-modal.component.html',
  styleUrls: ['./swiper-modal.component.scss'],
})
export class SwiperModalComponent implements OnInit, OnDestroy {
  @Input() heroes: HeroesData[];
  @Output() onSeeMore: EventEmitter<boolean>;
  @Output() ontoggleActiveHeroe: EventEmitter<number>;
  state: Partial<AppState>;
  subs: Subscription;
  config: SwiperOptions = {
    spaceBetween: 5,
    slidesPerView: 3.4,
    navigation: false,
    pagination: { clickable: false, enabled: false },
    scrollbar: { draggable: true, enabled: false },
  };
  constructor(private store: StoreService) {
    this.subs = new Subscription();
    this.onSeeMore = new EventEmitter();
    this.ontoggleActiveHeroe = new EventEmitter();
  }

  ngOnInit() {
    this.subs.add(
      this.store.getState().subscribe((state) => {
        this.state = state;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  seeMore() {
    this.onSeeMore.emit(true);
  }

  toggleActiveHeroe(index: number) {
    this.ontoggleActiveHeroe.emit(index);
  }
}
