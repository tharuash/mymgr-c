import { Injectable } from '@angular/core';
import { URL } from '../_path';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSeller(sellerId: number) {
    return this.http.get<User>(`${URL}/users/${sellerId}`);
  }
}
