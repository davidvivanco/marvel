import { HostListener, Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private _isMobile: BehaviorSubject<boolean>;

  constructor(private platform: Platform) {
    this._isMobile = new BehaviorSubject<boolean>(this.isMobile);
  }

  onResize(size: number) {
    this._isMobile.next(size <= 568);
  }

  isMobileView(): Observable<boolean> {
    return this._isMobile.asObservable().pipe(distinctUntilChanged());
  }

  /**
   * @description Indicates if the screen size corresponds to a desktop
   */
  get isMobile(): boolean {
    return this.platform.width() < 569;
  }
}
