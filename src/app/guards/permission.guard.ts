import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../login/auth.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {


    constructor(private authService: AuthService, private router: Router, private toast: ToastrService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isAdmin() ? true : this.goLogin();
    }

    private goLogin = () => {
        this.router.navigate(['home']);
        this.toast.error('Permissão Negada! Somente Administradores');
        return false;
    }

}
