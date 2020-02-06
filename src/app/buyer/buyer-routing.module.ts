import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
