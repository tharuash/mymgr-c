import { Component, OnInit } from '@angular/core';
import { OnlineOrder } from '../../../models/online_order';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import Swal from 'sweetalert2';
import { CommentService } from '../../../services/comment.service';
import { CommentDto } from '../../../models/comment_dto';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  orders: OnlineOrder[];
  
  constructor(private router: Router, private orderService: OrderService, private commentService: CommentService) { }

  ngOnInit() {
    this.orderService.getOnlineOrders().subscribe(
      data => {
        this.orders = data;
      }, error => {
        console.log(error);
      }
    );
  }


  

  buyerConfirmOrder(id) {
    console.log('orderId '+id);
    /*const onlineOrder: OnlineOrder = this.orders.find(i => i.id = id);
    console.log(this.orders.find(i => i.id = id));*/
    let onlineOrder: OnlineOrder;
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == id) {
        onlineOrder = this.orders[i];
      }
    }

    console.log(onlineOrder);
    onlineOrder.buyerConfirmation = true;
    
    this.orderService.updateOnlineOrder(onlineOrder).subscribe(
      data => {
        if (data.id) {
          Swal.fire({
            title: 'Order Receive Cofirmed',
            icon: 'success'
          });

          this.ngOnInit();
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

  buyerCancelOrder(id) {
    let onlineOrder: OnlineOrder;
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == id) {
        onlineOrder = this.orders[i];
      }
    }
    onlineOrder.cancellation = 'cancelled';
    this.orderService.updateOnlineOrder(onlineOrder).subscribe(
      data => {
        if (data.id) {
          Swal.fire({
            title: 'Order Cancelled',
            icon: 'success'
          });

          this.ngOnInit();
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

  rate(sellerId) {
    this.router.navigate(['buyer/order/rate', sellerId]);
  }

}
