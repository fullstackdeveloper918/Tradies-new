import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { Login, LoginResponse } from '../interfaces/auth.interface';
import { LocalStorage } from './local-storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private _apiService : ApiService, private storageService : LocalStorage) { }

  login(loginData:Login){
    return this._apiService.post<LoginResponse>('auth/login', loginData)
  }

  logOut(){
  this.storageService.removeItem('token')
  this.storageService.removeItem('user');
  }
}
