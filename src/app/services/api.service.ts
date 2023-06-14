import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { CharactersApiResponse, HeroesData } from '../models/api';
import { AppState } from '../store/state';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly publicKey: string;
  private readonly baseUrl: string;

  constructor(private store: StoreService, private http: HttpClient) {
    this.publicKey = 'cc1952a474bd6ba08844d7255330d469';
    this.baseUrl = 'https://gateway.marvel.com/v1/public';
  }

  getCharacters(name: string, state: Partial<AppState>, limit?: number) {
    let params = {};
    this.store.updateState({ ...state, loading: true });

    if (name) {
      params = new HttpParams().append('nameStartsWith', name);
    }

    if (limit) {
      params = new HttpParams().append('limit', limit);
    }

    const url = `${this.baseUrl}/characters?ts=1686170367275&hash=3d2452b91a40255c0d2c16ae7e8dcd08`;

    this.http
      .get<CharactersApiResponse>(url, { params })
      .pipe(map((res: CharactersApiResponse) => res?.data?.results || []))
      .subscribe((characters) => {
        this.store.updateState({ ...state, characters });
      });
  }

  getCharactersObs(
    name: string,
    state: Partial<AppState>,
    limit?: number
  ): Observable<HeroesData[]> {
    let params = {};
    console.log('foo1', name);
    this.store.updateState({ ...state, loading: true });

    if (name) {
      params = new HttpParams().append('nameStartsWith', name);
    }

    if (limit && name) {
      params = new HttpParams()
        .append('nameStartsWith', name)
        .append('limit', limit);
    }

    if (limit && !name) {
      params = new HttpParams().append('limit', limit);
    }

    const url = `${this.baseUrl}/characters?ts=1686170367275&hash=3d2452b91a40255c0d2c16ae7e8dcd08`;

    return this.http
      .get<CharactersApiResponse>(url, { params })
      .pipe(map((res: CharactersApiResponse) => res?.data?.results || []));
  }
}
