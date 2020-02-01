import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Product } from '../../models/product';
import { Delivery } from '../../models/delivery';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  order = new Order();
  delivery = new Delivery();
  constructor() { }

  ngOnInit() {
    this.order.product = new Product();
  }


}
