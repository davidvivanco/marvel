import { Component } from '@angular/core';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private store: StoreService) {
    this.store.initAppState({});
  }
}
