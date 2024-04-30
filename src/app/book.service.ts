import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { }

  bookData=new BehaviorSubject(null);
  Book(bookData:object):Observable<any>{
    return this._HttpClient.post(`https://scoobyfamily.onrender.com/scooby/api/request/addRequest/65db22b7f93993b1a0b35bb3`,bookData);
  }
  getServiceDetails(Id:string):Observable<any>{
    return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/serviceProfile/get-serviceProfile/${Id}`);
  }

  getserviceforreview(id:string):Observable<any>{
    return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/serviceProfile/get-serviceProfile/${id}`);
  }
  getServices(service:string):Observable<any>{
    return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/serviceProfile/get-servicesProfile`);
  }
getClientReview(CleintReview :string):Observable<any>{
  return this._HttpClient.get('https://scoobyfamily.onrender.com/scooby/api/reviews/getMyReviews/6620d7b11290e9d953c98bb9');
}
review(reviewInfo:object,id:string):Observable<any>{
  return this._HttpClient.post(`https://scoobyfamily.onrender.com/scooby/api/reviews/createReviewService/661d4dfec7fb2e799571b285?serviceId=${id}`,reviewInfo);
}
}







