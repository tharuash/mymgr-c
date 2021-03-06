import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { SelectComponent } from './select/select.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../services/token.service';


@NgModule({
  declarations: [ViewComponent, AddComponent, SelectComponent, DetailComponent, UpdateComponent],
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
