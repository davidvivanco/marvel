import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
} from 'swiper';
import { ApiService } from '../services/api.service';
import { HttpParams } from '@angular/common/http';
import { HeroesData } from '../models/api';
import { MENU_CONFIG } from '../config/menu';
import { StoreService } from '../store/store.service';
import { AppState } from '../store/state';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('modal') modal: IonModal;

  modalOpen: boolean;
  heroes: HeroesData[];
  heroeActive: HeroesData;
  menuConfig = MENU_CONFIG;
  seeMoreActive: boolean;
  state: Partial<AppState>;

  constructor(
    private cdr: ChangeDetectorRef,
    private api: ApiService,
    private store: StoreService
  ) {
    this.state = this.store.getStateValue();
    this.modalOpen = true;
    this.getCharacters(this.menuConfig[0].name);
    this.store.getState().subscribe((state) => {
      this.state = state;
      this.heroes = state.characters;
      if (state.closeFullyOpenModal) this.seeLess();
      if (this.heroes?.length > 0)
        this.heroeActive = this.state.characterSelected || this.heroes[0];
    });
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
    this.store.updateState({ ...this.state, characterSelected: null });
    this.api.getCharacters(name, this.state);
  }

  onMenuClose() {
    this.modalOpen = true;
  }
}
