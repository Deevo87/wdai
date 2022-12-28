import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountDataService } from '../services/account-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService : AccountDataService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.accountService.isLogged()
    if (this.accountService.ifLogged !== true) {
      this.router.navigate(['/log-in'])
      window.alert("Musisz byc zalogowanym, aby mieć dostęp do tej sekcji!")
      return false
    }
    return true
  }
  
}
