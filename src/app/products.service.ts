import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  getProduct(productType: string): Observable<any> {
    return this._httpClient.get(`https://scoobyfamily.onrender.com/scooby/api/product/getallproduct?category=${productType}`)
  }

  getProductSearch(search:string):Observable<any>
  {
     return this._httpClient.get(`https://scoobyfamily.onrender.com/scooby/api/product/getproduct?search=${search}`)
  }
   
  updateFavorite(productId: number, favorite: boolean) {
    console.log(favorite);
    const payload = { favorite: favorite };
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/fav/addfav/66138da36320a6b3105e2ad1?productId=${productId}`, payload);
  }

  getFavoriteProducts() {
    return this._httpClient.get(`https://scoobyfamily.onrender.com/scooby/api/fav/getfavproduct/66138da36320a6b3105e2ad1`);
  }



  addToCart(product: any): Observable<any> {
    // قم بتنفيذ طلب POST لإضافة المنتج إلى العربة
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/addproduct/66138da36320a6b3105e2ad1?productId=${product._id}`, product);
  }

  getcartProducts() {
    // قم بتنفيذ طلب GET لاسترداد بيانات العربة
    return this._httpClient.get(`https://scoobyfamily.onrender.com/scooby/api/cart/getcart/66138da36320a6b3105e2ad1`);
  }



  


  deleteItemFromCart(itemId: string): Observable<any> {
    return this._httpClient.delete(`https://scoobyfamily.onrender.com/scooby/api/cart/removeproduct/66138da36320a6b3105e2ad1?itemId=${itemId}`);
    
  }
  applyCoupon(couponCode: string): Observable<any> {
    const payload = { coupon: couponCode };
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/applycoupon/66138da36320a6b3105e2ad1`, payload);
  }
  increaseProductQuantity(productId: number): Observable<any> {
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/plusquantity/66138da36320a6b3105e2ad1?productId=${productId}`, {});
  }
  
  reduceProductQuantity(productId: number): Observable<any> {
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/minusquantity/66138da36320a6b3105e2ad1?productId=${productId}`, {});
  }

}


