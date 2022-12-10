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
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';
import { BasketComponent } from './basket/basket.component';
import { HeaderComponent } from './start/header/header.component';
import { FooterComponent } from './start/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    AddingTripComponent,
    TripRatingComponent,
    TripFiltersComponent,
    NavbarComponent,
    StartComponent,
    BasketComponent,
    HeaderComponent,
    FooterComponent,
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
