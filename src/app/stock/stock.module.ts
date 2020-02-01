import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { StockRoutingModule } from './stock-routing.module';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [ViewComponent, UpdateComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class StockModule { }
