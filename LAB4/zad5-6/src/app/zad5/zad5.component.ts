import { Component } from '@angular/core';

@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})

export class Zad5Component {
  constructor() { 
  }
  carData: any;
  brand: string
  choosenColor: string
  models: string
  colors: string[]

  
  ifBrand = true
  ifModel = false
  ifColor = false
  selectedCar = false
  
  ngOnInit(): void {
    fetch('./assets/zad5/cars.json').then(res => res.json())
    .then(json => {
      this.carData = json
      this.ifBrand=true
    });
  }

  brandDisplay() {
    this.ifModel = true
    this.selectedCar = false
    this.ifColor = false
  }

  coJestKurwa() {
    this.ifModel = true
    this.ifModel = true
  }

  modelDisplay() {
    this.ifColor = true
    this.colors = this.carData[this.brand][this.models]
    this.selectedCar = false
  }

  colorDisplay() {
    this.selectedCar = true
  }
}
