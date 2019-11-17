import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantBasicInfoComponent } from './participant-basic-info.component';

describe('ParticipantBasicInfoComponent', () => {
  let component: ParticipantBasicInfoComponent;
  let fixture: ComponentFixture<ParticipantBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
