import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountDataService } from '../services/account-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenagoGuard implements CanActivate {
  constructor(private accountService : AccountDataService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let str = this.accountService.currRole
    let tab = str?.split(",")
    if (tab.includes('menager')) {
      return true
    }
    window.alert("Brak uprawnień.")
    return false
  }
  
}
