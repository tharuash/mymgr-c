import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Transaction',
    }
  },
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Transaction',
    }
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    data: {
      title: 'Transaction',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
