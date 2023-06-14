import { HeroesData } from '../models/api';

export interface AppState {
  characters: HeroesData[];
  characterSelected: HeroesData;
  loading: boolean;
  closeFullyOpenModal: boolean;
}
