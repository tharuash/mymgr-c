import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Order } from '../../../models/order';
import {ChangeDetectorRef} from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { OrderedProduct } from '../../../models/ordered_products';
import { Time } from '@angular/common';
import { Stock } from '../../../models/stock';
import { User } from '../../../models/user';
import { OnChange } from 'ngx-bootstrap';
import { OnlineOrder } from '../../../models/online_order';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product =  new Product();
  productId: number;
  order = new Order();
  orderedProduct = new OrderedProduct();
  onlineOrder = new OnlineOrder();
  stock = new Stock();
  user = new User();
  // totalPrice = 0;
  constructor(private route: ActivatedRoute, private router: Router,
     private productService: ProductService, private cd: ChangeDetectorRef,
     private orderService: OrderService, private auth: AuthService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
    this.productService.getProductToBuy(this.productId).subscribe(
      data => {
        this.product = data;
        this.stock = this.product.stockDto;
        this.user = this.product.userDto;
      }, error => {
        console.log(error);
      }
    );
  }

  getTotalPrice(event) {
    this.orderedProduct.subTotal = 0;
    this.orderedProduct.subTotal = event.target.value * this.product.unitPrice;
    this.cd.detectChanges();
  }

  placeOrder() {
    if (!this.auth.getToken()) {
      this.router.navigate(['/login']);
      Swal.fire(
        'Oops...',
        'Please login before place order',
        'error'
      );

      return;
    }

    this.onlineOrder.totalPrice = this.orderedProduct.subTotal;
    this.onlineOrder.requiredQuantity = this.orderedProduct.requiredQuantity;
    this.onlineOrder.orderExpirationDate = this.order.orderExpirationDate;
    this.onlineOrder.orderLocation = this.order.orderLocation;
    this.onlineOrder.sellerConfirmation = false;
    this.onlineOrder.buyerConfirmation = false;
    this.onlineOrder.productDto = this.product;
    console.log(this.onlineOrder);

    this.orderService.addOnlineOrder(this.onlineOrder).subscribe(
      data => {
        if (data.id) {
          Swal.fire({
            title: 'Order Added',
            icon: 'success'
          });

          this.router.navigate(['buyer/order/view']);
        }
      }, error => {
        console.log(error);
        Swal.fire(
          'Oops...',
          'An unknown error occures..',
          'error'
        );
      }
    );
  }
}
