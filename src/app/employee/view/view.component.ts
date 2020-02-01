import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees: Employee[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewEmployee(id) {
    this.router.navigate(['employee/details', id]);
  }

}
