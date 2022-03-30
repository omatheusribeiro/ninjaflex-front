import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler,  HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { ModalNinjaFlexComponent } from '../../components/modal-ninjaflex/modal-ninjaflex.component';
import { ProgressSpinnerNinjaFlexComponent } from '../../components/progress-spinner-ninjaflex/progress-spinner-ninjaflex.component';


@Injectable()
export class RequestInterceptor implements HttpInterceptor, ProgressSpinnerNinjaFlexComponent {

    constructor(private dialog: MatDialog){}

    enableSpinner: boolean = false;

    mudarStatusSpinner(){
       this.enableSpinner = this.enableSpinner? false : true;
       console.log(this.enableSpinner);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token');

        this.mudarStatusSpinner();

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if(!event.body.success){
                        console.log(event)
                        const dialogRef = this.dialog.open(ModalNinjaFlexComponent, {
                            width: '500px',
                            data: {tittle: "Atenção", message: event.body.message},
                            panelClass: 'my-custom-dialog-class'
                        });
                    }
                    this.mudarStatusSpinner();
                }
                return event;
            })
        );
    }
}