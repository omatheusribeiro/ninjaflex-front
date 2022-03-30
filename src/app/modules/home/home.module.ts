import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { LayoutHomeComponent } from './components/layout-home/layout-home.component';
import { ProgressSpinnerNinjaFlexComponent } from '../common/components/progress-spinner-ninjaflex/progress-spinner-ninjaflex.component';
// import { RequestInterceptor } from '../common/interceptors/request/request-interceptor.service';

@NgModule({
    declarations: [
    LayoutHomeComponent,
    ProgressSpinnerNinjaFlexComponent
    ],
    imports: [
      CommonModule,
      BrowserModule,
      HttpClientModule,
      MatDialogModule,
      FormsModule
    ]
  })

export class HomeModule { }
