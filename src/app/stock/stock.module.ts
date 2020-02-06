import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { StockRoutingModule } from './stock-routing.module';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { StockService } from '../services/stock.service';
import { ProductService } from '../services/product.service';
import { TokenService } from '../services/token.service';


@NgModule({
  declarations: [ViewComponent, UpdateComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StockService, ProductService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenService,
      multi: true
    }
  ]
})
export class StockModule { }
