import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, delay, fromEvent, pipe, switchMap, tap } from 'rxjs';
import { HeroesData } from 'src/app/models/api';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/store/state';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-see-more-modal',
  templateUrl: './see-more-modal.component.html',
  styleUrls: ['./see-more-modal.component.scss'],
})
export class SeeMoreModalComponent implements OnDestroy {
  @Input() heroes: HeroesData[];
  state: Partial<AppState>;
  formGroup: FormGroup;
  subs: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private store: StoreService
  ) {
    this.subs = new Subscription();
    this.formGroup = this.formBuilder.group({
      search: [],
    });
    this.state = this.store.getStateValue();

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
          this.store.updateState({ ...this.state, characters, loading: false });
        })
    );

    this.subs.add(
      this.store.getState().subscribe((state) => {
        this.state = state;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  characterSelected(heroe: HeroesData) {
    this.store.updateState({
      ...this.state,
      characterSelected: heroe,
      closeFullyOpenModal: true,
    });
  }
}
