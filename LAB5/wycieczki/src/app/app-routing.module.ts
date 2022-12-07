import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingTripComponent } from './adding-trip/adding-trip.component';
import { TripFiltersComponent } from './trip-filters/trip-filters.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
