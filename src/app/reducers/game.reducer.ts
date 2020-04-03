import { createReducer, Action, on } from '@ngrx/store';
import * as gameActions from '../actions/game.actions';
export interface GameState {
  secret: number;
  guess: number;
}

const initialState: GameState = {
  secret: null,
  guess: null
};

const myReducer = createReducer(
  initialState,
  on(gameActions.startGame, (s, a) => ({ secret: a.randomNum, guess: null })),
  on(gameActions.takeGuess, (s, a) => ({ ...s, guess: a.guess }))

);

export function reducer(state: GameState, action: Action): GameState {
  return myReducer(state, action);
}
