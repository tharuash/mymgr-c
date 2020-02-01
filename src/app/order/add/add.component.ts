import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  order = new Order();
  productData = [
    {id: 1, name: '9p1'},
    {id: 1, name: 'p2'},
    {id: 1, name: 'p3'},
  ];
  productName: string;
  constructor() { }

  ngOnInit() {

  }

  register() {
  }

}
