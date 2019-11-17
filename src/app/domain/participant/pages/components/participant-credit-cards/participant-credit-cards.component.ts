import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-participant-credit-cards',
  templateUrl: './participant-credit-cards.component.html',
  styleUrls: ['./participant-credit-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantCreditCardsComponent {

  @Input() creditCardsFormArray: FormArray;

  addCreditCard() { }

  removeCreditCard(index: number) { }

}
