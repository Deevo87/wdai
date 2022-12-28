import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Trip } from '../trips/trips.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Data } from '@angular/router';
import { AccountDataService } from '../services/account-data.service';


@Component({
  selector: 'app-trip-rating',
  templateUrl: './trip-rating.component.html',
  styleUrls: ['./trip-rating.component.css']
})
export class TripRatingComponent implements OnInit{

  constructor(private dataService: DataService, private accountService : AccountDataService){}

  @Output() rated = new EventEmitter<number>()

  @Input() tripToRate!: Trip | undefined
  @Input() overallRate = 0
  @Input() raitings = 0


  ctrl = new FormControl<number | null>(null, Validators.required);
  
  voted = false
  isBought!: boolean
  isReviewed!: boolean
  

  ngOnInit() {
    this.checkIfReviewed()
    this.isBought = false
    this.accountService.getUserInfo().subscribe(change => {
      for (let item of change.bought) {
        if (item.name === this.tripToRate?.name) {
          this.isBought = true
        }
      }
    })
  }

  checkIfReviewed() {
    this.accountService.getUserInfo().subscribe(change => {
      for (let item of change.bought) {
        console.log(change.bought)
        console.log(item.name, this.tripToRate?.name)
        if (item.name === this.tripToRate?.name && item.reviewed === false) {
          console.log(item.reviewed, 'reviewed')
          this.isReviewed = false
        } else if (item.name === this.tripToRate?.name && item.reviewed === true) {
          console.log(item.reviewed, 'reviewed')
          this.isReviewed = true
        }
      }
    })
  }

  registerRate() {
    this.checkIfReviewed()
    if (this.isReviewed) {
      return
    } else {
      console.log('esssssssssa', this.tripToRate?.name)
      this.accountService.changeRevieved(this.tripToRate?.name)
      let val = this.ctrl.value
      this.dataService.updateRate(this.tripToRate?.id, val + this.tripToRate?.overallRate, this.tripToRate?.raitings)
      console.log(val)
      if (val != null){
        this.rated.emit(val)
      }
    }
  }

  calculateRate(){
    if (this.raitings != 0){
      return Math.round((this.overallRate / this.raitings)*100)/100
    }
    return 0
  }


}
