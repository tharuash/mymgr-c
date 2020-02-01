import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: 'assign',
    component: AddComponent,
    data: {
      title: 'Delivery',
    }
  },
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Delivery',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
