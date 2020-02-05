import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { URL } from '../_path';
import { Delivery } from '../models/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  addDelivery(delivery: Delivery, orderId: number) {
    return this.http.post<Delivery>(`${URL}deliveries/1/${orderId}`, delivery);
  }

  getDeliveries() {
    return this.http.get<Delivery[]>(`${URL}deliveries/1`);
  }

  updateDelivery(delivery: Delivery, orderId: number) {
    return this.http.put<Delivery>(`${URL}deliveries/1/${orderId}`, delivery);
  }

  getDelivery(id: number) {
    return this.http.get<Delivery>(`${URL}deliveries/1/${id}`);
  }
}
