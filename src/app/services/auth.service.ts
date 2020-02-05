import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { URL } from '../_path';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post<User>(`${URL}/users`, user);
  }

  getUserId() {
    return sessionStorage.getItem('id');
  }

}
