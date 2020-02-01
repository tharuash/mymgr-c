import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ViewComponent, DetailComponent, AddComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ChartsModule,
    FormsModule
  ]
})
export class ProductModule { }
