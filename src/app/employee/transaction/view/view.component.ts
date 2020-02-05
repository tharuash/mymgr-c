import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Transaction } from '../../../models/transaction';
import { Router } from '@angular/router';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  transactions: Transaction[];
  constructor(private router: Router, private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      data => {
        this.transactions = data;
      }, error => {
        console.log(error);
      }
    );
  }

  edit(id) {
    this.router.navigate(['employee/transaction/update', id]);
  }

}
