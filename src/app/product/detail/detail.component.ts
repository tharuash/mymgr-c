import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Order } from '../../models/order';
import { OrderedProduct } from '../../models/ordered_products';
import { User } from '../../models/user';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductOrder } from '../../models/product_order';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Product Sales'
        }
      }]
    }
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  productId: number;
  product: Product;
  productsOrders: ProductOrder[];

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
    this.productService.getProduct(this.productId).subscribe(
      data => {
        this.product = data;
      }, error => {
        console.log(error);
      }
    );

    this.productService.getProductOrders(this.productId).subscribe(
      data => {
        this.productsOrders = data;
      }, error => {
        console.log(error);
      }
    );
  }


}
