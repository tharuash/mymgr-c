import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buyer-register',
  templateUrl: './buyer-register.component.html',
  styleUrls: ['./buyer-register.component.css']
})
export class BuyerRegisterComponent implements OnInit {
  user = new User();
  role = new Role();
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  registerBuyer() {
    this.user.roles = [];
    this.role.name = 'ROLE_INTERNAL_BUYER';
    this.user.roles.push(this.role);
    this.auth.registerUser(this.user).subscribe(
      data => {
        // sessionStorage.setItem('id', data.id);
        console.log(this.user);
        this.router.navigate(['buyer/dashboard']);
      }, error => {
        console.log(error);
      }
    );
  }

}
