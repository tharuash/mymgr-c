import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [ViewComponent, DetailComponent, AddComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
