import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employee',
    },
    children: [
      {
        path: 'transaction',
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
      }
    ]

  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Employee',
    }
  },
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Employee',
    }
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    data: {
      title: 'Employee',
    }
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    data: {
      title: 'Employee',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
