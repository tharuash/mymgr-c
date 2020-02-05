import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees: Employee[];
  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      data => {
        this.employees = data;
      }, error => {
        console.log(error);
      }
    );
  }

  viewEmployee(id) {
    this.router.navigate(['employee/details', id]);
  }

  addTransaction(id) {
    this.router.navigate(['employee/transaction/add'],
    {queryParams: {
      id: id
    }});
  }

}
