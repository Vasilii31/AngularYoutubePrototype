import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

export const authGuard: CanActivateFn = (route, state) => {
const _authService = inject(AuthentificationService);
const _router = inject(Router);

const currentUser = _authService.currentUserValue;
if(currentUser){
  return true;
}
  _router.navigate(['/login']);
  return false;
};
