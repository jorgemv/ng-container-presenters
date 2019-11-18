// Angular stuff.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models.
import { Participant } from '../models/entities/participant.model';

// RxJS stuff.
import { Observable, Subject } from 'rxjs';

// Helpers.
import { RandomInteger } from '../../../shared/utils/helpers/RandomInteger.class';

// RxJS stuff.
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private readonly HTTP_CLIENT: HttpClient) { }

  /** Service configuration */
  private readonly API_CONTEXT = 'http://localhost:3000';

  private unsubscribe: Subject<void> = new Subject(); // Destroy subscription trigger

  public currentParticipant: Participant;

  /** Participant entity CRUD */

  /**
   * Creates a new Participant.
   * @param payload Participant will be created.
   */
  public create(payload: Participant): Observable<Participant> {
    return this.HTTP_CLIENT.post<Participant>(`${ this.API_CONTEXT }/participants`, payload);
  }

  /**
   * Gets an existing Participant by its identifier.
   * @param id Participant identifier.
   */
  public read(id: number): Observable<Participant> {
    return this.HTTP_CLIENT.get<Participant>(`${ this.API_CONTEXT }/participants/${ id }`);
  }

  /**
   * Updates an existing Participant.
   * @param payload Participant will be updated.
   */
  public update(payload: Participant): Observable<Participant> {
    return this.HTTP_CLIENT.put<Participant>(`${ this.API_CONTEXT }/participants/${ payload.id }`, payload);
  }

  /**
   * Removes an existing Participant by its identifier.
   * @param id Participant identifier.
   */
  public delete(id: number): Observable<Participant> {
    return this.HTTP_CLIENT.delete<Participant>(`${ this.API_CONTEXT }/participants/${ id }`);
  }

  /** Custom methods */

  /**
   * Saves a new participant or updates an existing one.
   * @param participant New or updated participant.
   */
  public consolidate(participant: Participant) {
    if (participant.id) {
      this.update(participant)
      .pipe(takeUntil(this.unsubscribe)) // Indicating when subscription will be destroyed.
        .subscribe((response: Participant) => this.updateCurrentParticipant(response));
    } else {
      // Hack: json-server aren't able to generate an ID in POST requests so we are generating it by ourselves.
      participant.id = RandomInteger.getRandomInt(2, 100000);

      this.create(participant)
      .pipe(takeUntil(this.unsubscribe)) // Indicating when subscription will be destroyed.
        .subscribe((response: Participant) => this.updateCurrentParticipant(response));
    }
  }

  /**
   * Updates the current participant.
   * @param participant New current participant
   */
  private updateCurrentParticipant(participant: Participant) {
    this.currentParticipant = participant;
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
