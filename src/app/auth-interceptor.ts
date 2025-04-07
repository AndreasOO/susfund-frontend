import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { inject } from '@angular/core';

import {Router, Route} from '@angular/router';

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log(req.url);
  const authRequest = req.clone({
    setHeaders: {Authorization: ''}
  })
  return next(authRequest).pipe(
    tap(
      event => {
        if (event instanceof HttpResponse)
          console.log('request succeeded');
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            console.log("Unauthorized from response interceptor");
            // router.navigate(['/']);
          }
          console.log('request failed');
        }
      }
    ));
}
