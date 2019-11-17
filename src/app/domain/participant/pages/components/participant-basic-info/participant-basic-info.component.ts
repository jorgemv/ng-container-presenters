import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-participant-basic-info',
  templateUrl: './participant-basic-info.component.html',
  styleUrls: ['./participant-basic-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantBasicInfoComponent {

  @Input() basicFormGroup: FormGroup;

}
