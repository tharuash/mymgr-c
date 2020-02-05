import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  orders: Order[];
  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      data => {
        this.orders = data;
      }, error => {
        console.log(error);
      }
    );
  }

  details(id) {
    this.router.navigate(['order/details', id]);
  }

}
