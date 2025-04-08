import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { inject } from '@angular/core';

import {Router, Route} from '@angular/router';
import {TokenBearer} from './cases-services/case-util/token-bearer';

// interceptor på alla utgående request
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const router= inject(Router);

  // http://localhost:8080/SusFund-1.0-SNAPSHOT/api/auth/login


  const token = localStorage.getItem('tokenBearer');
  const authRequest = req.clone({
    setHeaders: {
      Authorization: token!},
  })

  // returnerar sen om request gick bra eller dåligt, var man ska routas
  return next(authRequest).pipe(
    tap(
      event => {
        if (event instanceof HttpResponse){
          const tok:string = event.headers.get('token') as string
          console.log('request succeeded');
          //localStorage.setItem('tokenBearer', tok);
          router.navigate(['/cases']);
        }
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            console.log("Unauthorized from response interceptor");
            router.navigate(['/login']);
          }
          console.log('request failed');
        }
      }
    ));
}

