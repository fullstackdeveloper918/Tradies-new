import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class Dashboard {

  constructor(private _apiService : ApiService) { }

  getData(){
    return this._apiService.get('/todos')
  }
}
