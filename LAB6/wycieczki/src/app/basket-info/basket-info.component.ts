import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-basket-info',
  templateUrl: './basket-info.component.html',
  styleUrls: ['./basket-info.component.css']
})
export class BasketInfoComponent implements OnInit{

  constructor(private dataService: DataService, private accountService : AccountDataService) {}

  actualCurrency = this.dataService.currency
  qua!: number
  suma!: number
  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(change => {
      this.suma = 0
      this.qua = 0
      for(let item of change.basket) {
        if (item.trip.reserved > 0) {
          this.suma += +item.trip.reserved * item.trip.unitPrice
          this.qua += +item.trip.reserved
        }
      }
    })
  }
}
