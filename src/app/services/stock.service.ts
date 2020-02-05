import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Stock } from '../models/stock';
import { URL } from '../_path';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getStocks() {
    return this.http.get<Stock[]>(`${URL}products/stocks/1`);
  }

  getStock(id) {
    return this.http.get<Stock>(`${URL}products/stocks/1/${id}`);
  }

  updateStock(stock: Stock, id: number) {
    return this.http.put<Stock>(`${URL}products/stocks/1/${id}`, stock);
  }
}
