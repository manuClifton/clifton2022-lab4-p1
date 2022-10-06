import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificadorGuard implements OnInit,CanActivate, CanDeactivate<unknown> {

  userActual: any;

  constructor(
    private ruteo: Router,
    private auth: Auth,
    private authService: AuthService,
    ){}

    ngOnInit(): void {
      this.userActual = this.auth.currentUser;
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /*
        if(this.auth.currentUser.email == 'admin@admin.com' ){ 
        return true;
      }
       */
      if(this.authService.userActual.email == 'admin@admin.com' ){ 
        return true;
      }
      this.ruteo.navigateByUrl('/bienvenida', {replaceUrl:true});
      return false;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
