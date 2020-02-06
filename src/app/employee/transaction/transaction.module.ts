import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionRoutingModule } from './transaction-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../../services/token.service';


@NgModule({
  declarations: [AddComponent, ViewComponent, UpdateComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
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
export class TransactionModule { }
