import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Trip } from '../trips/trips.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-trip-rating',
  templateUrl: './trip-rating.component.html',
  styleUrls: ['./trip-rating.component.css']
})
export class TripRatingComponent {

  @Output() rated = new EventEmitter<number>()

  @Input() overallRate = 0
  @Input() raitings = 0

  ctrl = new FormControl<number | null>(null, Validators.required);

  // public starRating: any
  // ngOnInit(): void {
  //     this.starRating = 3
  // }
  
  voted = false

  registerRate() {
    if (this.voted) {
      return
    }
    this.voted = true
    let val = this.ctrl.value
    if (val != null){
      this.rated.emit(val)
      console.log("rating na szybkości: " + val)
    }
  }

  calculateRate(){
    if (this.raitings != 0){
      return Math.round((this.overallRate / this.raitings)*100)/100
    }
    return 0
  }
}
