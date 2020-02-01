import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  stock = [
    {id: 1, name: 'product1', stockType: 'INSTANT PRODUCTION', maximumQuantity: 25, isAvailableOnSell: false, currentlyAvailable: 0}
  ];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  update(id) {
    this.router.navigate(['stock/update', id]);
  }

}
