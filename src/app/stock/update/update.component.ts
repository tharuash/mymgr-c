import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product = new Product();
  stock = new Stock();
  constructor() { }

  ngOnInit() {
  }

}
