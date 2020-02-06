import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Role } from '../../models/role';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    const loginDto = {
      username: this.username,
      password: this.password,
    };

    // console.log(loginDto);

    this.authService.loginUser(loginDto).subscribe(
      data => {
        console.log(data);
        let roles: Role[] = data.user.roles;
        // roles.forEach(i => console.log(i));
        const seller = roles.find( i => i.name == 'ROLE_SELLER');
        const buyer = roles.find( i => i.name == 'ROLE_INTERNAL_BUYER');
        if (data.user && seller) {
          this.router.navigate(['dashboard']);
        } else if (data.user && buyer) {
          this.router.navigate(['buyer/dashboard']);
        } else {
          console.log(data);
        }
      }, error => {
        console.log(error);
      }
    );
  }

  buyerRegister() {
    this.router.navigate(['buyer/register']);
  }

  sellerRegister() {
    this.router.navigate(['register']);
  }
}
