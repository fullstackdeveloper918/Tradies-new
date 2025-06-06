import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { buildPaginationParams } from '../utils/http-params.helper';

@Injectable({
  providedIn: 'root'
})
export class Settings {

  constructor(private apiService : ApiService) { }

  getOrganisations(page?: number, pageSize?: number) {
  const params = buildPaginationParams(page, pageSize);
  return this.apiService.get('organisations', params);
}
}
