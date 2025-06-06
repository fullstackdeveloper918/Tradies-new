import { Inject, Injectable } from '@angular/core';
import {LocalStorage} from '../services/local-storage/local-storage'

@Injectable({ providedIn: 'root' })
export class TokenService { 
  constructor(private storageService : LocalStorage){}
  getToken(): string | null {
    return this.storageService.getItem('token');
  }
}
