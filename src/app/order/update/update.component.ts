import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Order } from '../../models/order';
import { Stock } from '../../models/stock';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { StockService } from '../../services/stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  orderId: number;
  order = new Order();
  productName: string;
  sellerStocks: Stock[];
  orderProducts = [];

  constructor(private productService: ProductService, 
      private route: ActivatedRoute, private router: Router,
      private orderService: OrderService, private stockService: StockService,
      private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params.id;
    this.orderService.getOrder(this.orderId).subscribe(
      data => {
        this.order = data;
        this.orderProducts = this.order.orderedProducts;
      }, error => {
        console.log(error);
      }
    );

    this.stockService.getStocks().subscribe(
      data => {
        this.sellerStocks = data;

       this.orderProducts.forEach(i => {
          const stock = this.sellerStocks.find(j => j.id == i.productId);
          i.stockType = stock.stockType;
          i.availableQuantity = stock.availableQuantity;
          i.unitPrice = stock.unitPrice;
        });
      }, error => {
        console.log(error);
      }
    );

  }

  checkValue(event) {
    console.log(event);
  }

  getQuantity(event, id) {
    const p = this.orderProducts.find(i => i.id = id);
    p.subTotal = event.target.value * p.unitPrice;
    this.orderProducts.find(i => i.id = id).subTotal = p.subTotal;
    let totalPrice = 0;
    this.orderProducts.forEach( i => {
      totalPrice = totalPrice + i.subTotal;
    } );
    this.order.totalPrice = totalPrice;
    this.cd.detectChanges();
  }

  updateOrder() {
    this.order.orderedProducts = this.orderProducts;
    this.orderService.updateManualOrder(this.order).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Order Update Cocnfirmed.',
            '',
            'success'
          );
          this.router.navigate(['order/details', data.id]);
          
        }
      }, error => {
        Swal.fire(
          'Oops...',
          'An unknown error occures..',
          'error'
        );
      }
    );

  }

}
