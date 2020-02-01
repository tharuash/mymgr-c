import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Products'
    }
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: {
      title: 'Products'
    }
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Products'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
