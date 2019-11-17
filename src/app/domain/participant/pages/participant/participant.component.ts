// Angular stuff.
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Models.
import { Participant } from '../../models/entities/participant.model';

// RxJS stuff.
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';

// Services.
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit, OnDestroy {

  participantForm: FormGroup;

  private _unsubscribe: Subject<void> = new Subject(); // Destroy subscription trigger.

  constructor(
    private readonly FB: FormBuilder,
    private readonly PARTICIPANT_SERVICE: ParticipantService
  ) { }

  ngOnInit() {
    this.buildForm(); // Building the main form group.
    this.PARTICIPANT_SERVICE.read(1) // Getting participant with ID 1.
      .pipe(takeUntil(this._unsubscribe)) // Indicating when subscription will be destroyed.
      .subscribe((response: Participant) => {
        this.onParticipantRetrieve(response);
      });
  }

  /** Getters and setters */

  get currentParticipant(): Participant {
    // Using spread operator because objects/arrays will be passed by reference
    // (not by value) in presenters OnPush change detection strategy.
    return { ...this.PARTICIPANT_SERVICE.currentParticipant };
  }

  /** Custom methods */

  /**
   * Builds the main form group in the container component.
   * It contains nested groups where each one corresponds with a presenter component form group.
   */
  private buildForm() {
    this.participantForm = this.FB.group({
      id: [],
      basic: this.FB.group({
        firstName: [, Validators.required],
        lastName: [, Validators.required],
        age: [, Validators.min(0)],
        gender: [],
        email: [, [Validators.required, Validators.email]],
        phone: this.FB.group({
          areaCode: [],
          phoneNumber: []
        })
      }),
      address: this.FB.group({
        street: [, Validators.required],
        number: [, [Validators.required, Validators.min(0)]],
        postal: [, Validators.required]
      }),
      creditCards: this.FB.array([this.initCreditCard()])
    });
  }

  /**
   * Initializes each credit card form array element.
   */
  private initCreditCard() {
    return this.FB.group({
      cardAlias: [, Validators.required],
      cardHolderName: [, Validators.required],
      cardNumber: [, Validators.required],
      ccv: [, Validators.required]
    });
  }

  /**
   * Callback executed after participant info is retrieved in order to refresh the reactive form with the new data.
   * @param participant New participant data to refresh the form.
   */
  private onParticipantRetrieve(participant: Participant) {
    this.participantForm.patchValue({
      id: participant.id,
      basic: {
        firstName: participant.basic.firstName,
        lastName: participant.basic.lastName,
        email: participant.basic.email,
        gender: participant.basic.gender,
        age: participant.basic.age,
        phone: {
          areaCode: participant.basic.phone.areaCode,
          phoneNumber: participant.basic.phone.phoneNumber
        }
      },
      address: {
        street: participant.address.street,
        number: participant.address.number,
        postal: participant.address.postal
      },
      creditCards: [
        {
          cardAlias: participant.creditCards[0].cardAlias,
          cardHolderName: participant.creditCards[0].cardHolderName,
          cardNumber: participant.creditCards[0].cardNumber,
          ccv: participant.creditCards[0].ccv
        }
      ]
    });

    this.PARTICIPANT_SERVICE.currentParticipant = participant;
  }

  /**
   * Saves current participant from form data.
   */
  onSubmit() {
    this.PARTICIPANT_SERVICE.consolidate(this.participantForm.value);
  }

  ngOnDestroy(): void {
    // Destroying all subscriptions.
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
