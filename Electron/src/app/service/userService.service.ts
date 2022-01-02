import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    const url = "http://localhost:8080/api/user/getAll";
    return this.http.get(url);
  }
}