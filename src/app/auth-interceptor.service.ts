import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = 'cc1952a474bd6ba08844d7255330d469';
    const authReq = req.clone({ params: req.params.set('apikey', apiKey) });
    return next.handle(authReq);
  }

}
