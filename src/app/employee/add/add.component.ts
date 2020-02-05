import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee = new Employee();
  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      data => {
        if(data.id){
          Swal.fire(
            'Done...',
            'Employee Registration completed.',
            'success'
          );
          this.router.navigate(['/employee/view']);
        } else {
          Swal.fire(
            'Ooops...',
            'An unknown error occured. Please Retry',
            'error'
          );
        }
      }, error => {
        Swal.fire(
          'Ooops...',
          'An unknown error occured. Please Retry',
          'error'
        );
      }
    );
  }

}
