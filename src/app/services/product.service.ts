import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { URL } from '../_path';
import { AuthService } from './auth.service';
import { ProductOrder } from '../models/product_order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  addProduct(productData) {
    const id = this.auth.getUserId();
    return this.http.post<Product>(`${URL}/products/${id}`, productData);
  }

  getProducts() {
    return this.http.get<Product[]>(`${URL}products/1`);
  }

  getProduct(id) {
    return this.http.get<Product>(`${URL}products/1/${id}`);
  }

  getProductOrders(id) {
    return this.http.get<ProductOrder[]>(`${URL}products/1/${id}/orders`);
  }

  getRequiredProducts(ids: number[]) {
    return this.http.get<Product[]>(`${URL}products/1/req`);
  }

}
