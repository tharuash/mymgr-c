import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  orders: Order[];
  constructor() { }

  ngOnInit() {
  }

}
