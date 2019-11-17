// Modules.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components.
import { AppComponent } from './app.component';
import { ParticipantComponent } from './domain/participant/pages/participant/participant.component';
import { ParticipantBasicInfoComponent } from './domain/participant/pages/components/participant-basic-info/participant-basic-info.component';
import { ParticipantAddressComponent } from './domain/participant/pages/components/participant-address/participant-address.component';
import { ParticipantCreditCardsComponent } from './domain/participant/pages/components/participant-credit-cards/participant-credit-cards.component';
import { ParticipantSummaryComponent } from './domain/participant/pages/components/participant-summary/participant-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    ParticipantBasicInfoComponent,
    ParticipantAddressComponent,
    ParticipantCreditCardsComponent,
    ParticipantSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
