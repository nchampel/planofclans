import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated = true; // Remplacez par votre propre logique d'authentification

      if (isAuthenticated) {
        return true; // L'utilisateur est authentifié, autoriser l'accès à la route privée
      } else {
        // L'utilisateur n'est pas authentifié, rediriger vers la page de connexion
        return this.router.createUrlTree(['/login']);
      }
    }
}
