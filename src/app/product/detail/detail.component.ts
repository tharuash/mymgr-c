import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Order } from '../../models/order';
import { OrderedProduct } from '../../models/ordered_products';
import { User } from '../../models/user';

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

  product = new Product();
  orderedProducts: OrderedProduct[] = [
    {
      id: 1,
     order: {
          id: 1,
          seller: new User(),
          orderExpirationDate: new Date(),
          orderStartDate: new Date(),
          orderStartTime: new Date(),
          price: 25,
          currencyType: '$',
          orderStatus: 'Delivered',
          location: 'dddddd',
          product: this.product
      },
    product: this.product,
    requiredQuantity: 25,
    subTotal: 650
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
