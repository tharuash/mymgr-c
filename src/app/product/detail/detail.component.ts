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
    {data: [65,44,25,48,12,45,52,32,14,12,15,12], label: 'Series A'},
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
  product = new Product();
  productsOrders: ProductOrder[] = [];

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
    this.productService.getProductOrders(this.productId).subscribe(
      data => {
        this.productsOrders = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );

    this.productService.getProduct(this.productId).subscribe(
      data => {
        this.product = data;

      }, error => {
        console.log(error);
      }
    );

    this.productService.getProductSells(this.productId).subscribe(
      data => {
        let months = new Array(12);

        for(let j =0 ; j<12 ; j++){
          months[j] = new Number();
          months[j] = 0;
        }

        data.forEach( i => {
          months[i.month -1] = months[i.month -1] + i.requiredQuantity;
        });

        for(let k=0; k<this.lineChartData.length; k++){
          this.lineChartData[k] = {data: months, label: 'Product Sells'};
        }
      }
    )
  }


}
