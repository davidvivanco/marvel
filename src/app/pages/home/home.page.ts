import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { IonModal } from '@ionic/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
} from 'swiper';
import { ApiService } from '../../services/api.service';
import { HttpParams } from '@angular/common/http';
import { HeroesData } from '../../models/api';
import { MENU_CONFIG } from '../../config/menu';
import { StoreService } from '../../store/store.service';
import { AppState } from '../../store/state';
import { Subscription, distinctUntilChanged } from 'rxjs';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  @ViewChild('modal') modal: IonModal;

  modalOpen: boolean;
  heroes: HeroesData[];
  heroeActive: HeroesData;
  menuConfig = MENU_CONFIG;
  seeMoreActive: boolean;
  state: Partial<AppState>;
  subs: Subscription;
  isMobileView: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    private api: ApiService,
    private screenSizeService: ScreenSizeService,
    private store: StoreService
  ) {
    this.subs = new Subscription();
    this.state = this.store.getStateValue();
    this.modalOpen = true;
    this.getCharacters(this.menuConfig[0].name);

    this.subs.add(
      this.screenSizeService
        .isMobileView()
        .pipe(distinctUntilChanged())
        .subscribe((isMobileView) => {
          this.isMobileView = isMobileView;
        })
    );
    
    this.subs.add(
      this.store.getState().subscribe((state) => {
        this.state = state;
        this.heroes = state.characters;
        if (state.closeFullyOpenModal) this.seeLess();

        if (this.heroes?.length > 0) {
          this.heroeActive = this.state.characterSelected || this.heroes[0];
        }
        if (!this.state.characterSelected) {
          this.state.characterSelected = this.heroeActive;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  closeMenu() {
    this.modalOpen = !this.modalOpen;
    this.seeMoreActive = false;
  }

  seeMore() {
    this.store.updateState({ ...this.state, characters: [] });
    this.modal.breakpoints = [1];
    this.modal.setCurrentBreakpoint(1);
    this.getCharacters(null, null, true);
  }

  seeLess() {
    this.store.updateState({ ...this.state, closeFullyOpenModal: false });
    this.modal.breakpoints = [0.1, 0.4];
    this.modal.setCurrentBreakpoint(0.4);
    this.seeMoreActive = false;
  }

  toggleActiveHeroe(index: number) {
    this.heroeActive = this.heroes[index];
    this.store.updateState({
      ...this.state,
      characterSelected: this.heroeActive,
    });
    this.cdr.detectChanges();
  }

  getCharacters(name?: string, limit?: number, seeMoreActive = false) {
    this.seeMoreActive = seeMoreActive;
    this.modalOpen = true;
    this.api.getCharacters(name, this.state);
  }

  onMenuClose() {
    this.modalOpen = true;
  }
  
  goToLinkedin(){
    window.open('https://www.linkedin.com/in/vivancoda/', '_self');
  }
}
