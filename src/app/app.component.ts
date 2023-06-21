import { Component, HostListener } from '@angular/core';
import { StoreService } from './store/store.service';
import { ScreenSizeService } from './services/screen-size.service';
import { distinctUntilChanged } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  private onResize(e) {
    this.screenSizeService.onResize(e.target.innerWidth);
  }
  constructor(
    private nav: NavController,
    private screenSizeService: ScreenSizeService,
    private store: StoreService
  ) {
    this.store.initAppState({});

    this.screenSizeService
      .isMobileView()
      .pipe(distinctUntilChanged())
      .subscribe((isMobileView) => {
        this.nav.navigateForward(isMobileView ? 'home' : 'home-web');
      });
  }
}
