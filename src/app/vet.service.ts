import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VetService {

  constructor(private  _HttpClient:HttpClient,private _Router:Router) { }
  doctorData=new BehaviorSubject(null);
  getOffers(offers:string):Observable<any>{
    return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/offer/getalloffer`);
      }
 getShelters(shelters:string):Observable<any>{
        return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/shelters/allShelters`);
          }
 getSuccessfullAdoption(SuccessfullAdoption:string):Observable<any>{
            return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/successfullyAdaped`);
              }
getpetsshelter(shelterpets:object,Id:string):Observable<any>{
   return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/shelters/petsInShelter/${Id}`,shelterpets);
              }
   getDoctors(doctors:string):Observable<any>{
     return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/doctors/getdoctors`);
                  }
 getVets(vets:string):Observable<any>{
    return this._HttpClient.get(`https://scoobyfamily.onrender.com/scooby/api/vet/getallvet`);
                               }


 BookDoctor(doctorData:object):Observable<any>{
 return this._HttpClient.post(`https://scoobyfamily.onrender.com/scooby/api/request/addRequest`,doctorData);
                               }
}
