import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(public accountService: AccountDataService) {
    accountService.isLogged()
  }

  ngOnInit(): void {
    this.accountService.isLogged()
  }

  signOut() {
    this.accountService.SignOut() 
  }

  whatRole() {
    if (this.accountService.currRole?.includes('admin') || this.accountService.currRole?.includes('menager')) {
      return true
    }
    return false
  }
}
