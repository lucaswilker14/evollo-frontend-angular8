import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../login/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuards implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.isAutheticated() ? true : this.goLogin();
    }

    canLoad(route: Route, segments: UrlSegment[])
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isAutheticated() ? true : this.goLogin();
    }

    private goLogin = () => {
        this.router.navigate(['']);
        return false;
    }


}
