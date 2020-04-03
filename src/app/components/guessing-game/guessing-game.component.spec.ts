import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingGameComponent } from './guessing-game.component';

describe('GuessingGameComponent', () => {
  let component: GuessingGameComponent;
  let fixture: ComponentFixture<GuessingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessingGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
