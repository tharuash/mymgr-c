import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Stock } from '../../models/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  stock: Stock[];
  constructor(private http: HttpClient, private router: Router, private stockService: StockService) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(
      data => {
        this.stock = data;
      }, error => {
        console.log(error);
      }
    );
  }

  update(id) {
    this.router.navigate(['stock/update', id]);
  }

}
