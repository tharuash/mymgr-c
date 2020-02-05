import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../models/delivery';
import { Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  deliveries: Delivery[];
  constructor(private router: Router, private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getDeliveries().subscribe(
      data => {
        this.deliveries = data;
      }, error => {
        console.log(error);
      }
    );
  }

  update(id) {
    this.router.navigate(['delivery/update', id]);
  }

}
