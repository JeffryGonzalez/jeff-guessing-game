import { createAction, props } from '@ngrx/store';

export const startGame = createAction(
  '[game] start game',
  () => ({
    randomNum: Math.floor(Math.random() * 10) + 1
  })
);

export const takeGuess = createAction(
  '[game] take guess',
  props<{ guess: number }>()
);
