import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingTripComponent } from './adding-trip/adding-trip.component';
import { TripsComponent } from './trips/trips.component';
import { StartComponent } from './start/start.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'adding', component: AddingTripComponent },
  { path: 'basket', component: BasketComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
