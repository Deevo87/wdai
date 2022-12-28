import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountDataService } from '../services/account-data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private accountService : AccountDataService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.accountService.currRole)
    let str = this.accountService.currRole
    let tab = str?.split(",")
    console.log(tab)
    if (tab.includes('admin') || tab.includes('menager')) {
      return true
    }
    window.alert("Brak uprawnień.")
    return false
  }
  
}
