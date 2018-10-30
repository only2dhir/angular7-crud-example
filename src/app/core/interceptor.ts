import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = '';
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ${currentUser.token}'
        }
      });
    }
    return next.handle(request);
  }
}
