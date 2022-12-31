import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import { account } from '../Iaccount';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit{

  constructor(private accountService : AccountDataService) {}
  
  users!: any[]
  isAdmin!: boolean
  isCustomer!: boolean
  isMenager!: boolean
  ngOnInit(): void {
      this.accountService.getUsers().subscribe(change => {
        this.users = []
        for (let user of change) {
          this.users.push({
            uid: user.uid,
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            role: user.role,
            isBanned: user.isBanned,
          })
        }
      })
  }

  changeBannedStatus(user : any) {
    this.accountService.changeBanned(!user.isBanned, user.uid)
  }


  addRole(role : string, user : any) {
    console.log(this.users)
    console.log(user)
    let str = user.role
    let tab = str?.split(",")
    if (tab.includes(role)) {
      let index = tab.indexOf(role)
      tab.splice(index, 1)
    } else {
      tab.push(role)
    }
    user.role = tab.toString()
    this.accountService.changeRoles(tab, user.uid)
  }

}
