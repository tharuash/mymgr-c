import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { URL } from '../_path';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post<any>(`${URL}/auth/signup`, user)
    .pipe(map(
      data => {
        console.log(data.token);
        sessionStorage.setItem('userId', data.user.id.toString());
        sessionStorage.setItem('token', 'Bearer ' + data.token);

        return data;
      }
    ));
  }

  loginUser(loginDto) {
    return this.http.post<any>(`${URL}/auth/signin`, loginDto)
    .pipe(map(
      data => {
        console.log(data.token);
        sessionStorage.setItem('userId', data.user.id.toString());
        sessionStorage.setItem('token', 'Bearer ' + data.token);
        // sessionStorage.setItem('role', data.user)

        return data;
      }
    ));
  }

  isUserLoggedIn() {
    const token = sessionStorage.getItem('token');
    const userId =  sessionStorage.getItem('userId');

    return !((userId === null) && (token === null));
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  getUserId() {
    return sessionStorage.getItem('userId');
  }

  logout() {
    sessionStorage.clear();
  }

  isSeller() {
    const role = sessionStorage.getItem('role');
    return role === 'ROLE_SELLER';
  }

  isBuyer() {
    const role = sessionStorage.getItem('role');
    return role === 'ROLE_INTERNAL_BUYER';
  }


}
