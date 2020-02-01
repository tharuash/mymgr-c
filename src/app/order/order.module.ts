import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ViewComponent, AddComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ]
})
export class OrderModule { }
