import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,BehaviorSubject} from 'rxjs';
import { jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
if(localStorage.getItem('userToken') != null)
  {
    this.setUserData();
  }
   }
 userData=new BehaviorSubject(null);
 user_id:any;
setUserData():void{
  let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
  let decodedToken= jwtDecode(encodedToken);
  this.userData.next(decodedToken);}

  signup(userData:object):Observable<any>{

   return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/users/signup',userData);
  }
  login(userData:object):Observable<any>{
    return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/users/login',userData);
   }

   logOut():void{
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate['/login'];

   }
forget(userData:object):Observable<any>{
return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/users/forgotPassword',userData);
}
}
