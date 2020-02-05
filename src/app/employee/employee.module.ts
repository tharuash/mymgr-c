import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [AddComponent, ViewComponent, DetailComponent, UpdateComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }
