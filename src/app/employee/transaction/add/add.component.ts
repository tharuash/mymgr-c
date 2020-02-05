import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Transaction } from '../../../models/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { TransactionService } from '../../../services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employeeData: Employee[];
  employeeId: number;
  employeeNames: string[] = [];
  employeeName: string;
  employee = new Employee();
  lastkeydown: number = 0;
  transaction = new Transaction();
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.employeeId = +params.id || 0;
      }
    );

    if (this.employeeId === 0) {
      this.employeeService.getEmployees().subscribe(
        data => {
          this.employeeData = data;
          console.log(this.employeeData);
        }, error => {
          console.log(error);
        }
      );
    } else {
      this.employeeService.getEmployee(this.employeeId).subscribe(
        data => {
          this.employeeName = data.name;
          console.log(this.employeeName);
        }, error => {
          console.log(error);
        }
      );
    }
  }

  getEmployees($event) {
    const empName = (<HTMLInputElement>document.getElementById('employeeName')).value;
    console.log(empName);

    if (empName.length > 0) {
      if ($event.timeStamp - this.lastkeydown > 200) {
        this.employeeNames = this.searchFromArray(this.employeeData, empName);
      }
    }
  }

  searchFromArray(arr, regex) {
    const matches = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.match(regex)) {
        matches.push(arr[i].name);
      }
    }
    return matches;
  }

  register() {
    if (this.employeeId === 0) {
      this.employeeId = this.employeeData.find(e => e.name == this.employeeName).id;
      this.transactionService.addTransaction(this.transaction, this.employeeId).subscribe(
        data => {
          if (data.id) {
            Swal.fire(
              'Done...',
              'Transaction Addedd successfull.',
              'success'
            );
            this.router.navigate(['/employee/transaction/view']);
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
    } else {
      this.transactionService.addTransaction(this.transaction, this.employeeId).subscribe(
        data => {
          if (data.id) {
            Swal.fire(
              'Done...',
              'Transaction Addedd successfull.',
              'success'
            );
            this.router.navigate(['/employee/transaction/view']);
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

}
