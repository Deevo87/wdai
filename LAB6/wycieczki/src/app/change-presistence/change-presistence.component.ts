import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-change-presistence',
  templateUrl: './change-presistence.component.html',
  styleUrls: ['./change-presistence.component.css']
})
export class ChangePresistenceComponent implements OnInit{

  constructor(private accountService : AccountDataService) {}

  selectedMode: string = ''

  ngOnInit(): void {
    this.selectedMode = this.accountService.presistance
  }

  changePresistence(presistance : string) {
    this.accountService.ChangePresistence(presistance)
    this.selectedMode = this.accountService.presistance
  }

}
