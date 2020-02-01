import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  employee = new Employee();
  transactions: Transaction[];
  constructor() { }

  ngOnInit() {
  }

  update() {

  }

}
