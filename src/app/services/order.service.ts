import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { URL } from '../_path';
import { Order } from '../models/order';
import { OnlineOrder } from '../models/online_order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getOrders() {
    return this.http.get<Order[]>(`${URL}/orders/${this.auth.getUserId()}`);
  }

  addManualOrder(order: Order) {
    return this.http.post<Order>(`${URL}/orders/${this.auth.getUserId()}`, order);
  }

  getOrder(id) {
    return this.http.get<Order>(`${URL}/orders/${this.auth.getUserId()}/${id}`);
  }

  updateManualOrder(order: Order) {
    return this.http.put<Order>(`${URL}/orders/${this.auth.getUserId()}`, order);
  }

  addOnlineOrder(order: OnlineOrder) {
    return this.http.post<OnlineOrder>(`${URL}/orders/buyer/${this.auth.getUserId()}?action=""`, order);
  }

  getOnlineOrders() {
    return this.http.get<OnlineOrder[]>(`${URL}/orders/buyer/${this.auth.getUserId()}`);
  }

  updateOnlineOrder(order: OnlineOrder) {
    return this.http.put<OnlineOrder>(`${URL}/orders/buyer/${this.auth.getUserId()}?action="u"`, order);
  }

}
