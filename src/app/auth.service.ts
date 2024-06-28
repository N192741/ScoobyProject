import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userName:string=JSON.parse(localStorage.getItem('userName'))
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.setUserData();
    }
  }

  userData = new BehaviorSubject(null);
 productData=new  BehaviorSubject(null);
  user_id: any;
  setUserData(): void {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
  console.log(localStorage.getItem('userToken'))
    let decodedToken = jwtDecode(encodedToken);
  console.log('userData');
    this.userData.next(decodedToken);
  }

  signup(userData: object): Observable<any> {

    return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/users/signup', userData);
  }
  login(userData: any): Observable<any> {

    return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/users/login', userData);
  }
   addProduct(productData:object):Observable<any>{

    return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/product/createproduct',productData);
   }


  logOut(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.userData.next(null);
    this._Router.navigate['/login'];
  }
  forget(userData: object): Observable<any> {
    return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/users/forgotPassword', userData);
  }
  getUser(): Observable<any> {
    return this._HttpClient.get('https://scoobyfamily.onrender.com/scooby/api/user/getuser');
  }
  updateUser(userData: object): Observable<any> {
    return this._HttpClient.patch('https://scoobyfamily.onrender.com/scooby/api/user/updateuser', userData);
}

sendCode(userData:object):Observable<any>{
  return this._HttpClient.post('https://scoobyfamily.onrender.com/scooby/api/users/checkCode',userData);
  }

  confirmpass(userData:object,idofuser:string):Observable<any>{
    return this._HttpClient.post(`https://scoobyfamily.onrender.com/scooby/api/users/reset-password/${idofuser}`,userData);
      }
   google(userData:string):Observable<any>{
    return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/users/google`);
   }
}
