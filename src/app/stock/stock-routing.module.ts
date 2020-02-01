import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
    data: {
      title: 'Stock'
    }
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
    data: {
      title: 'Stock'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
