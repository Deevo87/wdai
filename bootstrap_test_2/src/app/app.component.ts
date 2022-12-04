import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap_test_2';
  public rating1: any;
  public starRating: any
  
  
  ctrl = new FormControl<number | null>(null, Validators.required);

  consolLoguj() {
    console.log(this.ctrl.value)
  }

	toggle() {
		if (this.ctrl.disabled) {
			this.ctrl.enable();
		} else {
			this.ctrl.disable();
		}
	}
  ngOnInit(): void {
    this.rating1 = 0;
    this.starRating = 0
  }
  
  submitForm(form: NgForm) {
    form.resetForm();
    console.log("Rating 1: " + this.rating1);
    this.rating1 = 0;
  }

  currentRate = 6;

  consoleLoguj() {
    console.log("rating na szybkości: " + this.starRating)
  }
  
}
