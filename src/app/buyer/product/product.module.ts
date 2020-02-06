import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailComponent } from './detail/detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../../services/token.service';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenService,
      multi: true
    }
  ]
})
export class ProductModule { }
