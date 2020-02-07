import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isOpen = false;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.logout();
  }

  sellerLogin() {
    this.router.navigate(['login']);
  }

  buyerSection() {
    this.router.navigate(['buyer/dashboard']);
  }

  buyerRegister() {
    this.router.navigate(['buyer/register']);
  }

  sellerRegister() {
    this.router.navigate(['register']);
  }

  openmenu(){
    // console.log("workdddddd====")
    if(!this.isOpen) {
      this.isOpen = true;
    } else {
      this.isOpen = false
    }
    // console.log(this.isOpen)
  }


}
