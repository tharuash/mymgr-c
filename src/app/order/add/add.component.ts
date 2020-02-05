import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import { Order } from '../../models/order';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Product } from '../../models/product';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/stock.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  order = new Order();
  productName: string;
  sellerStocks: Stock[];
  orderProducts = [];
  
  constructor(private productService: ProductService, 
      private route: ActivatedRoute, private router: Router,
      private orderService: OrderService, private stockService: StockService,
      private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(
      data => {
        this.sellerStocks = data;

        for (let i = 0; i < this.sellerStocks.length; i++) {
          const orderedProduct = {
            id: '',
            productId: this.sellerStocks[i].id,
            productName: this.sellerStocks[i].productName,
            stockType: this.sellerStocks[i].stockType,
            availableQuantity: this.sellerStocks[i].availableQuantity,
            unitPrice: this.sellerStocks[i].unitPrice,
            requiredQuantity: 0,
            subTotal: 0
          };

          this.orderProducts.push(orderedProduct);
        }
      }
    );

  }

  checkValue(event) {
    console.log(event);
  }

  getQuantity(event, id) {
    const p = this.orderProducts.find(i => i.productId = id);
    p.subTotal = event.target.value * p.unitPrice;
    this.orderProducts.find(i => i.productId = id).subTotal = p.subTotal;
    let totalPrice = 0;
    this.orderProducts.forEach( i => {
      totalPrice = totalPrice + i.subTotal;
    } );
    this.order.totalPrice = totalPrice;
    this.cd.detectChanges();
  }

  placeOrder() {
    this.order.orderedProducts = this.orderProducts;
    this.orderService.addManualOrder(this.order).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Order Added',
            'You can confirm order on order views',
            'success'
          );
          this.router.navigate(['order/view']);
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
