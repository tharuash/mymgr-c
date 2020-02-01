import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { Transaction } from '../../../models/transaction';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employeeData = [
    {id: 1, name: 'Tharindu'},
    {id: 1, name: 'kamala'},
    {id: 1, name: 'wimal'},
  ];

  employeeNames: string[] = [];
  employeeName: string;
  lastkeydown: number = 0;
  transaction = new Transaction();
  constructor() { }

  ngOnInit() {
  }

  getEmployees($event) {
    const empName = (<HTMLInputElement>document.getElementById('employeeName')).value;

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
    console.log(this.employeeName);
  }

}
