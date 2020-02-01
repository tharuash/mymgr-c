import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../models/delivery';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  deliveries: Delivery[];
  constructor() { }

  ngOnInit() {
  }

}
