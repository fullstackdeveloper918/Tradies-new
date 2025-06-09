import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const spinnerService = inject(SpinnerService);

  const token = tokenService.getToken();

  spinnerService.show(); // Show spinner for every request

  const modifiedReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  return next(modifiedReq).pipe(
    finalize(() => spinnerService.hide()) 
  );
};
