import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class Settings {

  constructor(private apiService : ApiService) { }

  getOrganisations(){
    return this.apiService.get('organisations')
  }
}
