import { Inject, Injectable } from '@angular/core';
import {LocalStorage} from '../services/local-storage/local-storage'

@Injectable({ providedIn: 'root' })
export class TokenService { 
  storageService = Inject(LocalStorage)
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
