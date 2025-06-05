import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/core/interceptors/auth-interceptor';
import { errorInterceptor } from './app/core/interceptors/error-interceptor';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(
    withInterceptors([authInterceptor, errorInterceptor])
  )
  ]
})
  .catch((err) => console.error(err));
