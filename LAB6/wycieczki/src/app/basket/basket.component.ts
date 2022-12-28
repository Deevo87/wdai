import { Component, OnInit } from '@angular/core';
import { Trip } from '../Trip';
import { DataService } from '../services/data.service';
import { BoughtTrip } from '../IBoughtTrip';
import { SetDateService } from '../services/set-date.service';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{

  constructor(private dataService: DataService, private setDate: SetDateService, private accountService : AccountDataService) {}

  acutalCurrency = this.dataService.currency
  history!: BoughtTrip[]
  basket!: Trip[]
  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(change => {
      this.basket = []
      for (let item of change.basket) {
        console.log(item.trip)
        this.basket.push({
          id: item.trip.id,
          name: item.trip.name,
          destination: item.trip.destination,
          startDate: item.trip.startDate,
          endDate: item.trip.endDate,
          unitPrice: item.trip.unitPrice,
          maxQuantity: item.trip.maxQuantity,
          avaible: item.trip.avaible,
          shortDesc: item.trip.shortDesc,
          longDesc: item.trip.longDesc,
          imageLink1: item.trip.imageLink1,
          imageLink2: item.trip.imageLink2,
          imageLink3: item.trip.imageLink3,
          counter: item.trip.counter,
          overallRate: item.trip.overallRate,
          raitings: item.trip.raitings,
          reserved: item.trip.reserved
        })
        console.log(this.basket)
      }
    })
  }

  deleteTrip(trip: Trip) {
    this.dataService.updateQuantity(trip.id, trip.avaible, 0, trip, 0)
  }

  substractTrip(trip: Trip) {
    trip.maxQuantity = trip.maxQuantity + 1
    // trip.reserved = trip.reserved - 1
    this.dataService.updateQuantity(trip.id, trip.maxQuantity, trip.reserved, trip, -1)
  }

  addTrip(trip: Trip) {
    trip.maxQuantity = trip.maxQuantity - 1
    // trip.reserved = trip.reserved + 1
    this.dataService.updateQuantity(trip.id, trip.maxQuantity, trip.reserved, trip, 1)
  }

  buyTrip(trip: Trip) {
    console.log(trip)
    let setted = this.setDate.setStatus(trip)
    let bought = {
      boughtId: this.dataService.getLastBoughtID(),
      name: trip.name,
      destination: trip.destination,
      startDate: trip.startDate,
      endDate: trip.endDate,
      boughtDate: this.setDate.getDate().toDateString(),
      unitPrice: trip.unitPrice,
      maxQuantity: trip.maxQuantity,
      imageLink1: trip.imageLink1,
      bought: trip.reserved,
      status: setted,
      reviewed: false
    }
    this.dataService.updateQuantity(trip.id, trip.maxQuantity, 0, trip, 0)
    this.dataService.updateAvaible(trip.id, trip.avaible - trip.reserved)
    this.dataService.addToBought(bought)
  }

}
