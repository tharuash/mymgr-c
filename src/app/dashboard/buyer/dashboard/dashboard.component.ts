import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  detail(id) {
    this.router.navigate(['buyer/order/add', id]);
  }

}
