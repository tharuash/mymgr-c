import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Role } from '../../models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  user = new User();
  role = new Role();
  constructor(private router: Router) { }

  registerSeller() {
    this.user.roles = [];
    this.user.roles.push(this.role);
    console.log(this.role);
    console.log(this.user);
    this.router.navigate(['dashboard']);
  }

}
