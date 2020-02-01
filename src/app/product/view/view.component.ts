import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  products = [
    { id: 1,
      name: 'product p1',
      type: 'Food',
      unitPrice: '25',
      currencyType: '$',
      unitQuantity: '400',
      siUnit: 'g'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  detail(id) {
    this.router.navigate(['products/detail', id]);
  }

}
