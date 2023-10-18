import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'currentUser';
const EXPIRE_AT_KEY = 'auth-expire-at';
const IS_GUEST_KEY = 'auth-is-guest';
const location_longitude = 'location-longitude';
const location_latitude = 'location-latitude';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public saveExpireAt(expire_at: string): void {
    localStorage.removeItem(EXPIRE_AT_KEY);
    localStorage.setItem(EXPIRE_AT_KEY, expire_at);
  }

  public saveIsGuest(is_guest: string): void {
    localStorage.removeItem(IS_GUEST_KEY);
    localStorage.setItem(IS_GUEST_KEY, is_guest);
  }

  public saveLongitude(longitude: string): void {
    localStorage.removeItem(location_longitude);
    localStorage.setItem(location_longitude, longitude);
  }

  public saveLatitude(latitude: string): void {
    localStorage.removeItem(location_latitude);
    localStorage.setItem(location_latitude, latitude);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getIsGuest(): string | null {
    return localStorage.getItem(IS_GUEST_KEY);
  }

  public getLocationLatitude(): string | null {
    return localStorage.getItem(location_latitude);
  }

  public getLocationLongitude(): string | null {
    return localStorage.getItem(location_longitude);
  }


}
