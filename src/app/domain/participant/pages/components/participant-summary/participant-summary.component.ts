import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Participant } from '../../../models/entities/participant.model';

@Component({
  selector: 'app-participant-summary',
  templateUrl: './participant-summary.component.html',
  styleUrls: ['./participant-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantSummaryComponent implements OnChanges {

  @Input() currentParticipant: Participant;

  public fullAddress: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentParticipant && this.currentParticipant.address) {
      this.fullAddress = `${ this.currentParticipant.address.street }, ${ this.currentParticipant.address.number }, ${ this.currentParticipant.address.postal }`;
    }
  }

}
