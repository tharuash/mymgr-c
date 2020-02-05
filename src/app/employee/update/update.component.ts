import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee = new Employee();
  employeeId: number;
  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.params.id;
    this.employeeService.getEmployee(this.employeeId).subscribe(
      data => {
        this.employee = data;
      }, error => {
        console.log(error);
      }
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(
      data => {
      if (data.id) {
        Swal.fire(
          'Done...',
          'Employee Update completed.',
          'success'
        );
        this.router.navigate(['/employee/details', data.id]);
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
