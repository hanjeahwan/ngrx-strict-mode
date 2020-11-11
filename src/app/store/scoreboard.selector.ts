import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GameState, scoreboardFeatureKey } from './scoreboard.reducer';

export interface AppState {
  game: GameState;
}

export const selectFeature = createFeatureSelector<AppState, GameState>(
  scoreboardFeatureKey
);

export const selectFeatureHome = createSelector(
  selectFeature,
  (state) => state.home
);
