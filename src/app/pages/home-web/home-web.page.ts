import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, delay, switchMap, tap } from 'rxjs';
import { MENU_CONFIG } from 'src/app/config/menu';
import { HeroesData } from 'src/app/models/api';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/store/state';
import { StoreService } from 'src/app/store/store.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-web',
  templateUrl: './home-web.page.html',
  styleUrls: ['./home-web.page.scss'],
})
export class HomeWebPage implements OnInit {
  formGroup: FormGroup;
  menuConfig = MENU_CONFIG;
  config: SwiperOptions = {
    slidesPerView: 5.2,
    spaceBetween: 5,
    navigation: false,
    pagination: { clickable: false, enabled: false },
    scrollbar: { draggable: true, enabled: false },
  };
  subs: Subscription;
  heroes: HeroesData[];
  heroeActive: HeroesData;
  state: Partial<AppState>;
  navActive: number = 0;
  innerWidth: number;


  constructor(
    private cdr: ChangeDetectorRef,
    private store: StoreService,
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.subs = new Subscription();
    this.formGroup = this.formBuilder.group({
      search: [],
    });
    this.state = this.store.getStateValue();
    this.getCharacters(this.menuConfig[0].name);
  }

  ngOnInit() {
    this.subs.add(
      this.store.getState().subscribe((state) => {
        this.state = state;
        console.log('ssd', state);
        this.heroes = state.characters;
        if (this.heroes?.length > 0) {
          this.heroeActive = this.state.characterSelected || this.heroes[0];
        }
        if (!this.state.characterSelected) {
          this.state.characterSelected = this.heroeActive;
        }
      })
    );

    this.subs.add(
      this.formGroup.valueChanges
        .pipe(
          tap(() => {
            this.heroes = [];
            this.store.updateState({ ...this.state, loading: true });
          }),
          delay(500),
          switchMap((value) => {
            const search = value.search;
            return this.api.getCharactersObs(search, this.state);
          })
        )
        .subscribe((characters) => {
          this.heroeActive = null;
          const characterSelected =
            characters?.length > 0 ? characters[0] : null;
          this.store.updateState({
            ...this.state,
            characters,
            loading: false,
            characterSelected,
          });
        })
    );
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
    this.api.getCharacters(name, this.state);
  }

  back() {}

  goToLinkedin(){
    window.open('https://www.linkedin.com/in/vivancoda/', '_self');
  }
}
