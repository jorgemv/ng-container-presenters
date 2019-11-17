import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantComponent } from './domain/participant/pages/participant/participant.component';


const routes: Routes = [
  { path: 'participant', component: ParticipantComponent },
  { path: '', redirectTo: 'participant', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
