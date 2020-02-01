import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employee: Employee[];
  constructor() { }

  ngOnInit() {
  }

}
