import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Role } from '../../models/role';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  user = new User();
  role = new Role();
  constructor(private router: Router, private auth: AuthService) { }

  registerSeller() {
    this.user.roles = [];
    this.user.roles.push(this.role);
    this.auth.addUser(this.user).subscribe(
      data => {
        sessionStorage.setItem('id', data.id);
        console.log(this.user);
        this.router.navigate(['dashboard']);
      }
    );
  }

}
