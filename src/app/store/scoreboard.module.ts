import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { scoreboardFeatureKey, reducer } from './scoreboard.reducer';

@NgModule({
  imports: [StoreModule.forFeature(scoreboardFeatureKey, reducer)],
})
export class ScoreboardModule {}
