import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { Login, LoginResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private _apiService : ApiService) { }

  login(loginData:Login){
    return this._apiService.post<LoginResponse>('auth/login', loginData)
  }
}
