import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../services/token.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenService,
      multi: true
    }
  ]
})
export class BuyerModule { }
