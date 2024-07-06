
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private _httpclient: HttpClient) { }
  getBlogs(blogs:string):Observable<any>{
    return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Plogs/getallplogs`);
      }
 getpet(pet:string):Observable<any>
 {
return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/getallpets`)
 }
 getNear(Near:string):Observable<any>
 {
return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/shelters/petsInShelters`)
 }
 updateFavorite(petId: number, favorite: boolean) {
  console.log(favorite);
  const payload = { favorite: favorite };
  return this._httpclient.patch(`https://scoobyfamily.onrender.com/scooby/api/fav/addfav?petId=${petId}`, payload);
}

getFavoritePets() {
  return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/fav/getfavpet`);
}

getSuccessfullAdoption(SuccessfullAdoption:string):Observable<any>{
  return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/successfullyAdaped`);
    }
    getTop( Top:string):Observable<any>
    {
   return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/get-top-collection-dog`)
    }
    getCollection(Collection:string):Observable<any>
    {
   return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/get-top-collection-cat`)
    }

    getPopular( Popular:string):Observable<any>
    {
   return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/getdogs`)
    }

    getBest( Best:string):Observable<any>
    {
   return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/filterdogsforkids`)
    }

    getBreed( Breed:string):Observable<any>
    {
   return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/getcats`)
    }
    getkide( kide:string):Observable<any>
    {
   return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/filtercatsforkids`)
    }
    getFavoriteProducts() {
      return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/fav/getfavpet`);
    }


    getProduct(productType: string): Observable<any> {
      return this._httpclient.get(`https://scoobyfamily.onrender.com/scooby/api/Pets/getallpetsquery?type=${productType}`)
    }


    
   
    addToCart(product: any): Observable<any> {
      // قم بتنفيذ طلب POST لإضافة المنتج إلى العربة
      return this._httpclient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/addproduct?productId=${product._id}`, product);
    }
  }
