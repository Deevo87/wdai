import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})


export class TripsComponent {
  trips: Trip[] = []
  ngOnInit(): void {
    fetch('./assets/tripsData.json').then(res => res.json())
    .then(json => {
      for (let i in json["trips"]) {
        this.trips.push({
          name: json["trips"][i]["name"],
          destination: json["trips"][i]["destination"],
          startData: json["trips"][i]["startData"],
          endData: json["trips"][i]["endData"],
          unitPrice: json["trips"][i]["unitPrice"],
          maxQuantity: json["trips"][i]["maxQuantity"],
          shortDesc: json["trips"][i]["shortDesc"],
          imageLink: json["trips"][i]["imageLink"],
          counter: 0,
          overallRate: json["trips"][i]["overallRate"],
          raitings: json["trips"][i]["raitings"]
        } as Trip)
      }
    });
  }

  constructor() {
    console.log(this.trips)
  }

  addingTickets(trip: Trip) {
    if (trip.maxQuantity > 0) {
      trip.counter += 1
      trip.maxQuantity -= 1
    }
  }

  removingTickets(trip: Trip) {
    if (trip.counter > 0) {
      trip.counter -= 1
      trip.maxQuantity += 1
    } 
  }

  changeTripCnt(trip: Trip[]) {
    let cnt = 0
    for (let t of trip) {
      cnt += t.counter
    } 
    return cnt
  }
  expensiveTrip(trip: Trip) {
    let highest = -1
    let highestTmp = -1
    for (let t of this.trips) {
      let num = +t.unitPrice
      if (highest < num){
        highest = num
      }
    }
    highestTmp = highest
    highest = -1
    return +trip.unitPrice == highestTmp
  }

  cheapestTrip(trip: Trip){
    let smallest = 10000000000
    let smallestTmp = 0
    for (let t of this.trips) {
      let num = +t.unitPrice
      if (smallest > num) {
        smallest = num
      }
    }
    smallestTmp = smallest
    smallest = 10000000000
    return +trip.unitPrice == smallestTmp
  }

  deleteTrip(trip: Trip) {
    for (let i = 0; i < this.trips.length; i++) {
      if (trip == this.trips[i]) {
        this.trips.splice(i, 1)
        return
      }
    }
  }

  addingSubmitedTrip(newTrip: Trip) {
    console.log(newTrip)
    this.trips.push(newTrip)
  }

  raitingTrip(trip: Trip, rate: number) {
    trip.raitings += 1
    trip.overallRate = +trip.overallRate
    trip.overallRate += rate
    console.log(typeof(trip.overallRate))
    console.log(rate)
    console.log(trip.overallRate)
  }
}
  

export interface Trip {
  name: string
  destination: string
  startData: string
  endData: string
  unitPrice: number
  maxQuantity: number
  shortDesc: string
  imageLink: string
  counter: number
  overallRate: any
  raitings: number
}