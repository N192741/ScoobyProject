import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable ,BehaviorSubject} from 'rxjs';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _Httpclient:HttpClient,private _Router:Router) { }
 requestData=new BehaviorSubject(null);
  BookService(requestData:object):Observable<any>{
    return this._Httpclient.post('https://scoobyfamily.onrender.com/scooby/api/request/addRequest',requestData);
   }
  getBlogs(blogs:string):Observable<any>{
return this._Httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Plogs/getallplogs`);
  }

  getreviews(reviews:string):Observable<any>{
    return this._Httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/services/getAllServices`);
      }
 getServiecs(Serviecs:string):Observable<any>{

  return this._Httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/services/getAllServices`);
 }
}
