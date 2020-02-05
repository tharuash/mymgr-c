import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [AddComponent, ViewComponent, UpdateComponent],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    FormsModule
  ]
})
export class DeliveryModule { }
