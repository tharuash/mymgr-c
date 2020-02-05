import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Product } from '../../models/product';
import { Delivery } from '../../models/delivery';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  order = new Order();
  delivery = new Delivery();
  orderProducts = [];
  orderId: number;
  constructor(private orderService: OrderService, private route: ActivatedRoute,
    private router: Router, private deliveryService: DeliveryService) { }

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

  assignDelivery() {
    this.deliveryService.addDelivery(this.delivery, this.orderId).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Delivery Assigned',
            '',
            'success'
          );
          this.router.navigate(['delivery/view']);
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
