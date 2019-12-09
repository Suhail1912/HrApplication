import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {
  
  constructor() { }
  
  
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    
    if (sessionStorage.getItem('AuthToken')) {
      console.log("done with adding header ")
      req = req.clone({
          headers: req.headers.set('Authorization',  "Bearer " + sessionStorage.getItem('AuthToken'))
      });
    }

    return next.handle(req);
  }

}
