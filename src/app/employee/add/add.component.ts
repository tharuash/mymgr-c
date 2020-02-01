import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employee = new Employee();
  constructor() { }

  ngOnInit() {
  }

}
