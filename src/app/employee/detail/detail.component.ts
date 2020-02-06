import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Transaction } from '../../models/transaction';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  employee = new Employee();
  transactions: Transaction[];
  employeeId: number;
  constructor(private router: Router, private route: ActivatedRoute,
     private employeeService: EmployeeService, private transactionService: TransactionService) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.params.id;
    this.employeeService.getEmployee(this.employeeId).subscribe(
      data => {
        this.employee = data;
      }, error => {
        console.log(error);
      }
    );

    this.transactionService.getEmployeeTransactions(this.employeeId).subscribe(
      data => {
        this.transactions = data;
      }, error => {
        console.log(error);
      }
    );
  }

  update(id) {
    this.router.navigate(['employee/update', id]);
  }

  edit(id) {
    this.router.navigate(['employee/transaction/update', id]);
  }

}
