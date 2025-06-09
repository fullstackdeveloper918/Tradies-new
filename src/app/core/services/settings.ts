import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { buildPaginationParams } from '../utils/http-params.helper';
import { Organisation, organisations } from '../interfaces/settings.interface';
import { apiRoutes } from '../utils/api.routes';

@Injectable({
  providedIn: 'root'
})
export class Settings {

  constructor(private apiService : ApiService) { }

getOrganisations(page?: number, pageSize?: number) {
const params = buildPaginationParams(page, pageSize);
return this.apiService.get(apiRoutes.organisations, params);
}

createOrganisations(formValue:organisations){
 return this.apiService.post(apiRoutes.organisations, formValue)
}

// DELETE ORGANISATION
deleteOrganisation(data:Organisation){
  console.log('delete data', data)
  return this.apiService.delete(`${apiRoutes.organisations}/${data.uuid}`)
}

// UPDATE ORGANISATION
updateOrganisations(formValue: organisations, data : Organisation){
  return this.apiService.put(`${apiRoutes.organisations}/${data.uuid}`, formValue)
}
}
