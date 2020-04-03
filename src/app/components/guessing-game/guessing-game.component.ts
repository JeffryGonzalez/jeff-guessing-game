import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectYouWin, selectTooHigh, selectTooLow } from 'src/app/reducers';
import * as actions from '../../actions/game.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-guessing-game',
  templateUrl: './guessing-game.component.html',
  styleUrls: ['./guessing-game.component.css']
})
export class GuessingGameComponent implements OnInit {

  youWin$: Observable<boolean>;
  tooLow$: Observable<boolean>;
  tooHigh$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.youWin$ = this.store.select(selectYouWin);
    this.tooHigh$ = this.store.select(selectTooHigh);
    this.tooLow$ = this.store.select(selectTooLow);
  }

  startGame() {
    this.store.dispatch(actions.startGame());
  }

  takeGuess(guessEl: HTMLInputElement) {
    this.store.dispatch(actions.takeGuess({ guess: guessEl.valueAsNumber }));
    guessEl.value = '';
    guessEl.focus();
  }
}
