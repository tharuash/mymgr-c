import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  products: Product[];
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }, error => {
        console.log(error);
      }
    );
  }

  detail(id) {
    this.router.navigate(['products/detail', id]);
  }

}
