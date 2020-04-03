import * as fromGame from './game.reducer';
import { createSelector } from '@ngrx/store';
export interface AppState {
  game: fromGame.GameState;
}

export const reducers = {
  game: fromGame.reducer
};


// selectors

const selectGameBranch = (state: AppState) => state.game;
const selectGameSecret = createSelector(
  selectGameBranch,
  b => b.secret
);
const selectCurrentGuess = createSelector(
  selectGameBranch,
  b => b.guess
);
export const selectPlaying = createSelector(
  selectGameSecret,
  selectCurrentGuess,
  (s, g) => !isNull(s) && !isNull(g)
);

export const selectYouWin = createSelector(
  selectPlaying,
  selectGameSecret,
  selectCurrentGuess,
  (p, s, g) => {
    if (!p) { return false; }
    return s === g;
  }
);

export const selectTooLow = createSelector(
  selectPlaying,
  selectYouWin,
  selectGameSecret,
  selectCurrentGuess,
  (p, win, s, g) => {
    if (win || !p) { return false; }
    return s > g;
  }
);

export const selectTooHigh = createSelector(
  selectPlaying,
  selectYouWin,
  selectGameSecret,
  selectCurrentGuess,
  (p, win, s, g) => {
    if (win || !p) { return false; }
    return s < g;
  }
);
function isNull(v: any) {
  return v === null;
}
