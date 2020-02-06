import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Transaction } from '../models/transaction';
import { URL } from '../_path';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  addTransaction(transaction: Transaction, employeeId: number) {
    return this.http.post<Transaction>(`${URL}/employees/transactions/${this.auth.getUserId()}/${employeeId}`, transaction);
  }

  getTransactions() {
    return this.http.get<Transaction[]>(`${URL}/employees/transactions/${this.auth.getUserId()}`);
  }

  getTransaction(transactionId: number) {
    return this.http.get<Transaction>(`${URL}/employees/transactions/${this.auth.getUserId()}/0/${transactionId}`);
  }

  getEmployeeTransactions(employeeId: number) {
    return this.http.get<Transaction[]>(`${URL}/employees/transactions/${this.auth.getUserId()}/${employeeId}`);
  }

  updateTransaction(transaction: Transaction, employeeId: number) {
    return this.http.put<Transaction>(`${URL}/employees/transactions/${this.auth.getUserId()}/${employeeId}`, transaction);
  }
}
