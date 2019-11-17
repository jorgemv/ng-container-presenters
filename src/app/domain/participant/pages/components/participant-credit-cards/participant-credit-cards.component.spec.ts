import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantCreditCardsComponent } from './participant-credit-cards.component';

describe('ParticipantCreditCardsComponent', () => {
  let component: ParticipantCreditCardsComponent;
  let fixture: ComponentFixture<ParticipantCreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantCreditCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
