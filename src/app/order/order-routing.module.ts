import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SelectComponent } from './select/select.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: 'select',
    component: SelectComponent,
    data: {
      title: 'Order Products',
    }
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Orders',
    }
  },
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Orders',
    }
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    data: {
      title: 'Orders',
    }
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    data: {
      title: 'Orders',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
