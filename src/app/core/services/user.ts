import { Injectable } from '@angular/core';
import { LocalStorage } from './local-storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class userService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'userDetails';

  constructor(private localStorgeService: LocalStorage) {}

  getToken(): string | null {
    return this.localStorgeService.getItem<string>(this.TOKEN_KEY);
  }

  getUser(): any | null {
    return this.localStorgeService.getItem<any>(this.USER_KEY);
  }

  getUserId(): number | null {
    const user = this.getUser();
    return user?.id || null;
  }

  getOrganisationUuid(){
    const userDetails = this.localStorgeService.getItem<any>(this.USER_KEY)
    return userDetails.user.organisation.uuid;
  }
}
