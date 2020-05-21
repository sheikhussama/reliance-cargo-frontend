import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';

import {
  throwError as observableThrowError,
  Observable,
  BehaviorSubject
} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ToasterService } from 'angular2-toaster';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  isRefreshingToken: Boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
      private toaster: ToasterService,
      private cookie: CookieService
  ) { }

  addToken(req: HttpRequest<any>, token: any): HttpRequest<any> {
      if (token) {
          return req.clone({ setHeaders: { Authorization: 'JWT ' + token } });
      }
      return req;
  }

  intercept(
      request: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {
      return next.handle(this.addToken(request,  this.cookie.get('accessToken'))).pipe(
          catchError(error => {
              if (error instanceof HttpErrorResponse) {
                  switch ((<HttpErrorResponse>error).status) {
                      case 400:
                          return this.handle400Error(error);
                      case 503:
                          return this.handle400Error(error);
                      case 500:
                          return this.handle500Error(error);
                      default:
                          return this.validationFailed(error);
                  }
              }
              return observableThrowError(error);
          })
      );
  }

  handle500Error(error) {
      this.toaster.pop('error', 'Sorry for inconvience, server not responding', '');
      return observableThrowError(error);
  }

  validationFailed(error) {
      if (error.status !== 200) {
          this.toaster.pop('error', 'Sorry', 'Something went wrong');
          return observableThrowError(error);
      }
      return observableThrowError(null);
  }

  handle400Error(error) {
      const err = error.error.error;
      if (err) {
          this.toaster.pop('error', err, '');
      }
      return observableThrowError(error);
  }
}
