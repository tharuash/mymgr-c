import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RateComponent } from './rate/rate.component';


const routes: Routes = [
  {
    path: 'add/:id',
    component: AddComponent,
    data: {
      title: 'Order'
    }
  },
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Order'
    }
  },
  {
    path: 'rate/:id',
    component: RateComponent,
    data: {
      title: 'Order'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
