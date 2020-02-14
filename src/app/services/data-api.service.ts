import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { UserInterface } from '../models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  users: Observable<any>;
  user: Observable<any>;
  public selectedUser: UserInterface = {
    id: null,
    first_name: '',
    last_name: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    status: ''
  };
  
  constructor(private http: HttpClient) { }
  

  getAllUsers() {
    const url_api = `https://gorest.co.in/public-api/users?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X`;
    return this.http.get(url_api);
  }

  getUserById(id: string){
    console.log(id)
    const url_api = `https://gorest.co.in/public-api/users/${id}?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X`;
    return this.http.get(url_api);
  }
}

