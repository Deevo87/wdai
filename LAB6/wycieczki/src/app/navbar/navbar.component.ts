import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(public accountService: AccountDataService, private router : Router) {
    accountService.isLogged()
  }

  ngOnInit(): void {
    this.accountService.isLogged()
  }

  signOut() {
    this.accountService.SignOut()
    this.reloadAll()
  }

  whatRole() {
    if (this.accountService.currRole?.includes('admin') || this.accountService.currRole?.includes('menager')) {
      return true
    }
    return false
  }

  reloadAll() {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['']).then(()=>{
        window.location.reload
      })
    })
  }
}
