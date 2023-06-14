import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from './state';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private state$: BehaviorSubject<Partial<AppState>>;

  constructor() {

  }

  initAppState(state: Partial<AppState>) {
    this.state$ = new BehaviorSubject<Partial<AppState>>(state);
  }

  getState() {
    return this.state$.asObservable();
  }

  getStateValue(): Partial<AppState> {
    return this.state$.getValue();
  }

  updateState(state: Partial<AppState>) {
    this.state$.next(state);
  }

  completeState() {
    if (this.state$) this.state$.complete();
  }

  resetState() {
    this.state$ = new BehaviorSubject<Partial<AppState>>({});
  }

  stateIsComplete(): boolean {
    return this.state$ ? this.state$.isStopped : true;
  }
}
