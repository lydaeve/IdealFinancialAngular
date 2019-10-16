import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WithdrawService } from '../_services/withdraw.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() { }

    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            const error =  err.error.message;
            if (err.status === 400) {
                if(err.error == 'Amount exceeds available funds.'){
                    return throwError(error);
                }
                // auto logout if 401 response returned from api
               
                
            }

            return throwError(error);
        }));
    }
}