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
    return this.http.post<Product>(`${URL}/products/${this.auth.getUserId()}`, productData);
  }

  getProducts() {
    return this.http.get<Product[]>(`${URL}/products/${this.auth.getUserId()}`);
  }

  getProduct(id) {
    return this.http.get<Product>(`${URL}/products/${this.auth.getUserId()}/${id}`);
  }

  getProductOrders(id) {
    return this.http.get<ProductOrder[]>(`${URL}/products/${this.auth.getUserId()}/${id}/orders`);
  }

  getRequiredProducts(ids: number[]) {
    return this.http.get<Product[]>(`${URL}/products/${this.auth.getUserId()}/req`);
  }

  getAllProducts() {
    return this.http.get<Product[]>(`${URL}/products`);
  }

  getProductToBuy(productId) {
    return this.http.get<Product>(`${URL}/products/buy/${productId}`);
  }

  getProductSells(id) {
    return this.http.get<any>(`${URL}/products/${this.auth.getUserId()}/${id}/sells`);
  }
}
