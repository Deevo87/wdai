import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Trip } from '../Trip';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'


@Component({
  selector: 'app-modify-trip',
  templateUrl: './modify-trip.component.html',
  styleUrls: ['./modify-trip.component.css']
})
export class ModifyTripComponent implements OnInit{

  constructor(private dataService : DataService, private formBuilder : FormBuilder) {}

  modifyForm!: FormGroup
  actualCurrency = this.dataService.currency
  trips!: Trip[]
  images: string[] = []
  ngOnInit(): void {
    this.dataService.getTrips().subscribe(change => {
      this.trips = []
      for(let trip of change) {
        this.trips.push({
          id: trip.id,
          name: trip.name,
          destination: trip.destination,
          startDate: trip.startDate,
          endDate: trip.endDate,
          unitPrice: trip.unitPrice,
          maxQuantity: trip.maxQuantity,
          avaible: trip.avaible,
          shortDesc: trip.shortDesc,
          longDesc: trip.longDesc,
          imageLink1: trip.imageLink1,
          imageLink2: trip.imageLink2,
          imageLink3: trip.imageLink3,
          counter: trip.counter,
          overallRate: trip.overallRate,
          raitings: trip.raitings,
          reserved: trip.reserved
        })
      }
    })
    this.modifyForm = this.formBuilder.group({
      modifiedName: [''],
      modifiedDestination: [''],
      modifiedStartDate: [''],
      modifiedEndDate: [''],
      modifiedUnitPrice: [''],
      modifiedMaxQuantity: [''],
      modifiedShortDesc: [''],
      modifiedImageLink1: [''],
      modifiedImageLink2: [''],
      modifiedImageLink3: [''],
    })
  }

  deleteTrip(trip: Trip) {
    this.dataService.updateQuantity(trip.id, 0, 0, trip, 0)
    this.trips = this.trips.filter((elem) => {
      return elem != trip
    })
    this.dataService.deleteTrip(trip)
  }

  modifyTrip(trip : Trip) {
    this.modifiedImages(trip)
    this.makeNewTrip(trip)
  }

  modifiedImages(trip : Trip) {
    if (this.modifyForm.get('modifiedImageLink1')!.value === '') {
      this.images.push(trip.imageLink1)
      console.log(trip.imageLink1)
    } else {
      this.images.push(this.modifyForm.get('modifiedImageLink1')!.value)
    }
    if (this.modifyForm.get('modifiedImageLink2')!.value === '') {
      this.images.push(trip.imageLink2)
    } else {
      this.images.push(this.modifyForm.get('modifiedImageLink2')!.value)
    }
    if (this.modifyForm.get('modifiedImageLink3')!.value === '') {
      this.images.push(trip.imageLink3)
    } else {
      this.images.push(this.modifyForm.get('modifiedImageLink3')!.value)
    }
    console.log(this.images)
  }

  makeNewTrip(trip: Trip) {
    let newTrip = {
      id: trip.id,
      name: this.modifyForm.get('modifiedName')!.value,
      destination: this.modifyForm.get('modifiedDestination')!.value,
      startDate: this.modifyForm.get('modifiedStartDate')!.value,
      endDate: this.modifyForm.get('modifiedEndDate')!.value,
      unitPrice: this.modifyForm.get('modifiedUnitPrice')!.value,
      maxQuantity: this.modifyForm.get('modifiedMaxQuantity')!.value,
      avaible: this.modifyForm.get('modifiedMaxQuantity')!.value,
      reserved: 0,
      shortDesc: this.modifyForm.get('modifiedShortDesc')!.value,
      longDesc: 'trip.longDesc',
      imageLink1: this.images[0],
      imageLink2: this.images[1],
      imageLink3: this.images[2],
      counter: 0,
      overallRate: 0,
      raitings: 0
    } as Trip
    console.log(newTrip)
    this.dataService.createTrip(newTrip) //powinno działać
    this.modifyForm.reset()
  }
}
