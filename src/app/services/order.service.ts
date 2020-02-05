import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { URL } from '../_path';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getOrders() {
    return this.http.get<Order[]>(`${URL}orders/1`);
  }

  addManualOrder(order: Order) {
    return this.http.post<Order>(`${URL}orders/1`, order);
  }

  getOrder(id) {
    return this.http.get<Order>(`${URL}orders/1/${id}`);
  }

  updateManualOrder(order: Order) {
    return this.http.put<Order>(`${URL}orders/1`, order);
  }
}
