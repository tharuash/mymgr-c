import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/stock.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product = new Product();
  stock = new Stock();
  stockId: number;
  constructor(private stockService: StockService,
    private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.stockId = this.route.snapshot.params.id;
    this.productService.getProduct(this.stockId).subscribe(
      data => {
        this.product = data;
      }, error => {
        console.log(error);
      }
    );

    this.stockService.getStock(this.stockId).subscribe(
      data => {
        this.stock = data;
      }, error => {
        console.log(error);
      }
    );
  }

  update(id: number) {
    this.stockService.updateStock(this.stock, id).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Done...',
            'Stock update has completed.',
            'success'
          );
          this.router.navigate(['/stock/view']);
        }
      }
    )
  }

}
