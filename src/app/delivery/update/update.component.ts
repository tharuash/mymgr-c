import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Delivery } from '../../models/delivery';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  order = new Order();
  delivery = new Delivery();
  orderProducts = [];
  orderId: number;
  deliveryId: number;
  constructor(private orderService: OrderService, private route: ActivatedRoute,
    private router: Router, private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryId = this.route.snapshot.params.id;
    this.deliveryService.getDelivery(this.deliveryId).subscribe(
      data => {
        this.delivery = data;
        this.orderId = this.delivery.orderId;

        this.orderService.getOrder(this.orderId).subscribe(
          response => {
            this.order = response;
            this.orderProducts = this.order.orderedProducts;
          }, error => {
            console.log(error);
          }
        );
      }
    );
  }

  updateDelivery() {
    this.deliveryService.updateDelivery(this.delivery, this.orderId).subscribe(
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
