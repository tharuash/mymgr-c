import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  simpleProducts = [];
  products: Product[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
        for (let i = 0; i < this.products.length; i++ ){
          const simpleProduct = {
            id: this.products[i].id,
            name: this.products[i].name,
            checked: false
          };

          this.simpleProducts.push(simpleProduct);
        }
      }, error => {
        console.log(error);
      }
    );
  }

  addOrder() {
    const options = [];
    for (let i = 0; i < this.simpleProducts.length; i++ ) {
      if (this.simpleProducts[i].checked) {
          options.push(this.simpleProducts[i].id);
          //options.push(5);
      }
    }
    this.router.navigate(['order/add'], {queryParams: options});
  }
}
