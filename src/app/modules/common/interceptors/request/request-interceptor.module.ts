import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request-interceptor.service';

@NgModule({
 providers: [
    RequestInterceptor,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  },
 ],
})

export class RequestInterceptorModule {}