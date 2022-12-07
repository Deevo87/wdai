import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { AddingTripComponent } from './adding-trip/adding-trip.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TripRatingComponent } from './trip-rating/trip-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TripFiltersComponent } from './trip-filters/trip-filters.component';


@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    AddingTripComponent,
    TripRatingComponent,
    TripFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
