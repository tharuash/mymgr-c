import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { StockRoutingModule } from './stock-routing.module';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { StockService } from '../services/stock.service';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [ViewComponent, UpdateComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StockService, ProductService]
})
export class StockModule { }
