import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAddressComponent } from './participant-address.component';

describe('ParticipantAddressComponent', () => {
  let component: ParticipantAddressComponent;
  let fixture: ComponentFixture<ParticipantAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
