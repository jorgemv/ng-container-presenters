import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-participant-address',
  templateUrl: './participant-address.component.html',
  styleUrls: ['./participant-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantAddressComponent {

  @Input() addressFormGroup: FormGroup;

}
