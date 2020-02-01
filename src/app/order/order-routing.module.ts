import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
