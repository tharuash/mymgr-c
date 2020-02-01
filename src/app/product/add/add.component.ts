import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product = new Product();
  stock = new Stock();
  constructor() { }

  ngOnInit() {
  }

  register() {
    this.product.stock = this.stock;
    console.log(this.product);
  }

}
