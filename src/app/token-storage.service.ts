import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public signOut() {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.clear();
  }

  public saveToken(token: string) {
    sessionStorage.setItem(TOKEN_KEY,token);

  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

}
