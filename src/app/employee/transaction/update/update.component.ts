import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../../services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  transaction = new Transaction();
  transactionId: number;
  constructor(private route: ActivatedRoute, private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
    this.transactionId = this.route.snapshot.params.id;
    this.transactionService.getTransaction(this.transactionId).subscribe(
      data => {
        this.transaction = data;
      }, error => {
        console.log(error);
      }
    );
  }

  updateTransaction() {
    this.transactionService.updateTransaction(this.transaction, this.transaction.employee.id).subscribe(
      data => {
        if (data.id) {
          Swal.fire(
            'Done...',
            'Transaction Update successfull.',
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
