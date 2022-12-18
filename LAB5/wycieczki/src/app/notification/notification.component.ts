import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Trip } from '../Trip';
import { DataService } from '../services/data.service';
import { SetDateService } from '../services/set-date.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  constructor(private dataService: DataService, private setDateService: SetDateService) {}

  @Input() tripToPass!: Trip

  ngOnInit(): void {
  }

  passDate() {
    return this.setDateService.getDate()
  }

  getDays() {
    let now = this.setDateService.getDate()
    
    const [dayT, monthT, yearT] = this.tripToPass.startDate.split('/')
    // const [dayStr, month, dayNum, year] = nowString.split(' ')
    let startDate = new Date(+yearT, +monthT - 1, +dayT)
    return +startDate.getDate() - +now.getDate()
  }

  ifUpcoming() {
    let now = this.setDateService.getDate()
    
    const [dayT, monthT, yearT] = this.tripToPass.startDate.split('/')
    // const [dayStr, month, dayNum, year] = nowString.split(' ')
    let startDate = new Date(+yearT, +monthT - 1, +dayT)

    if (startDate.getMonth() === now.getMonth() && startDate.getFullYear() === now.getFullYear() &&
    +startDate.getDate() - +now.getDate() <= 10){
      return true
    }
    return false
  }

}
