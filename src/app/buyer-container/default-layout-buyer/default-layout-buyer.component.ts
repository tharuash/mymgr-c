import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';

@Component({
  selector: 'app-default-layout-buyer',
  templateUrl: './default-layout-buyer.component.html',
  styleUrls: ['./default-layout-buyer.component.css']
})
export class DefaultLayoutBuyerComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor() { }

  ngOnInit() {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
