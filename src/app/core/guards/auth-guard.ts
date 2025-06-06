import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorage } from '../services/local-storage/local-storage';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorage);

  const token = localStorageService.getItem('token');
  console.log('token', token)

  if (token) {
    return true; // allow route access
  } else {
    router.navigate(['/auth']); // redirect to login
    return false;
  }
};
