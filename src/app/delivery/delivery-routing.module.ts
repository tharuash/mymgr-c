import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: 'assign/:id',
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
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
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
