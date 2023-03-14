import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {User} from "../../Models/User/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private  urlAuth  = "https://localhost:7011/api/Authentication/login" ;
  constructor(private  http : HttpClient , private  router : Router) { }

  tokenResp :  any ;
  private  _updateMenu = new Subject<void>();
  get updateMenu(){
    return this._updateMenu;
  }
  On_Login(obj : User) : Observable<User>{
   return this.http.post<User>(`${this.urlAuth}` , obj ) ;
  }
  getToken(){
    return localStorage.getItem('token') || ' ' ;
  }
  isLogged(){
    return localStorage.getItem('token') != null ;
  }

  logOut(){
    alert('Your session expired');
    localStorage.clear();
    this.router?.navigate(['pages-login']);
  }

  SaveTokens(tokenData : any)
  {
    return localStorage.setItem('token' , tokenData.token);
  }
  // GenerateRefreshToken(tokenData : any){
  // return localeStorage.setItem('refreshToken', tokenDate.token);
  // }
}
