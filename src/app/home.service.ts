import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpclient:HttpClient) { }

  getBlogs(blogs:string):Observable<any>{
return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Plogs/getallplogs`);
  }


  getreviews(reviews:string):Observable<any>{
    return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/services/getAllServices`);
      }

 getServiecs(Serviecs:string):Observable<any>{

  return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/services/getAllServices`);
 }
}
