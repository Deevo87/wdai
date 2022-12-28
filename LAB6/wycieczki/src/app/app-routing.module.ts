import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingTripComponent } from './adding-trip/adding-trip.component';
import { TripsComponent } from './trips/trips.component';
import { StartComponent } from './start/start.component';
import { BasketComponent } from './basket/basket.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleTripViewComponent } from './single-trip-view/single-trip-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  { path: 'trips', component: TripsComponent },
  { path: 'adding', component: AddingTripComponent, canActivate: [AdminGuard]},
  { path: 'basket', component: BasketComponent, canActivate: [AuthGuard] },
  { path: 'trip-view/:id', component: SingleTripViewComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'admin-view', component: AdminViewComponent, canActivate: [AdminGuard] },
  { path: '', component: StartComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
