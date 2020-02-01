import { Employee } from './employee';
import { Time } from '@angular/common';

export class Transaction {
    id: number;
    employee: Employee;
    transactionType: string;
    transactionDate: Date;
    transactionTime: Time;
    amount: number;
    description: number;
}
