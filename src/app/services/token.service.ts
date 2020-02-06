import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    const userId = this.auth.getUserId();


      if (token) {
      req = req.clone({
        setHeaders : {
          Authorization : token
        }
      });
    }
      console.log(req.headers);

    return next.handle(req);
  }
}
