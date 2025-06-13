import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { buildPaginationParams } from '../utils/http-params.helper';
import { AdminSettingsForm, AdminSettingsRespose, Organisation, organisations, VariationSettingsForm } from '../interfaces/settings.interface';
import { apiRoutes } from '../utils/api.routes';
import { userService } from './user';
import { CreateUserResponse, UserUpdateResponse } from '../interfaces/createUser.interfacet';
import { Observable } from 'rxjs';
import { UserForm } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class Settings {

  constructor(private apiService : ApiService, private userService : userService) { }

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

// GET ORGANISATION USERS
getOrganisationsUsers(organisationUuid:string){
 return this.apiService.get(`${apiRoutes.organisations}/${organisationUuid}/users`)
}

// CREATE USER
createUser(userForm: UserForm): Observable<CreateUserResponse> {
  const organisationUUId = this.userService.getOrganisationUuid();

  // Create a new object with organisationId set properly
  const payload: UserForm = {
    ...userForm,
    organisationId: organisationUUId
  };

  return this.apiService.post<CreateUserResponse>(apiRoutes.createUser, payload);
}

// Update USER
updateUser(userForm:UserForm, userUUid: string): Observable<UserUpdateResponse>{
  return this.apiService.put<UserUpdateResponse>(`${apiRoutes.user}/${userUUid}`, userForm)
}

// DELETE USER
deleteUser(userUUid:string){
  return this.apiService.delete(`${apiRoutes.user}/${userUUid}`)
}

// UPDATE ADMIN SETTINGS
updateAdminSettings(adminSettingsForm:AdminSettingsForm){
  return this.apiService.post(apiRoutes.adminSettings, adminSettingsForm)
}

// GET ADMIN SETTINGS
getAdminSettings(): Observable<AdminSettingsRespose>{
  return this.apiService.get<AdminSettingsRespose>(apiRoutes.adminSettings);
}

// UPDATE VARIATION SETTINGS
updateSettings(settingstype: string, variationForm: VariationSettingsForm) {
  console.log('settingstype', settingstype);

  const settingsModuleMap: { [key: string]: number } = {
    variation: 1,
    selection: 2,
    rfi: 3
  };

  const module = settingsModuleMap[settingstype];

  if (!module) {
    throw new Error(`Unknown settings type: ${settingstype}`);
  }
  return this.apiService.post(`${apiRoutes.settings}/${module}`, variationForm);
}

// GET VARIATIONS, SELECTIONS AND RFI SETTINGS
getVSRSettings(settingstype : string){
  const settingsModuleMap: { [key: string]: number } = {
    variation: 1,
    selection: 2,
    rfi: 3
  };

  const module = settingsModuleMap[settingstype];

  if (!module) {
    throw new Error(`Unknown settings type: ${settingstype}`);
  }
  return this.apiService.get(`${apiRoutes.settings}/${module}`);
}
}
