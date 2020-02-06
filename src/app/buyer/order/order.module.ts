import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RateComponent } from './rate/rate.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../../services/token.service';


@NgModule({
  declarations: [AddComponent, ViewComponent, RateComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenService,
      multi: true
    }
  ]
})
export class OrderModule { }
