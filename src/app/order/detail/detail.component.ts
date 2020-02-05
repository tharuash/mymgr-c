import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  order = new Order();
  orderProducts = [];
  orderId: number;
  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }

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
  }

  sellerConfirm(id) {
    this.order.sellerConfirmation = true;
    this.orderService.updateManualOrder(this.order).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Seller Cocnfirmed.',
            '',
            'success'
          );
          this.ngOnInit();
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

  sellerCancel(id) {
    this.order.sellerConfirmation = false;
    this.orderService.updateManualOrder(this.order).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Seller Cocnfirmed.',
            '',
            'success'
          );
          this.ngOnInit();
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

  buyerConfirm(id) {
    this.order.buyerConfirmation = true;
    this.orderService.updateManualOrder(this.order).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Seller Cocnfirmed.',
            '',
            'success'
          );
          this.ngOnInit();
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

  buyerCancel(id) {
    this.order.buyerConfirmation = false;
    this.orderService.updateManualOrder(this.order).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Seller Cocnfirmed.',
            '',
            'success'
          );
          this.ngOnInit();
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

  update(id) {
    this.router.navigate(['order/update', id]);
  }

  delivery(id) {
    this.router.navigate(['delivery/assign', id]);
  }
}
