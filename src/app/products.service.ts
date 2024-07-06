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
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/fav/addfav?productId=${productId}`, payload);
  }

  getFavoriteProducts() {
    return this._httpClient.get(`https://scoobyfamily.onrender.com/scooby/api/fav/getfavproduct`);
  }



  addToCart(product: any): Observable<any> {
    // قم بتنفيذ طلب POST لإضافة المنتج إلى العربة
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/addproduct?productId=${product._id}`, product);
  }

  getcartProducts() {
    // قم بتنفيذ طلب GET لاسترداد بيانات العربة
    return this._httpClient.get(`https://scoobyfamily.onrender.com/scooby/api/cart/getcart`);
  }



  


  deleteItemFromCart(itemId: string): Observable<any> {
    return this._httpClient.delete(`https://scoobyfamily.onrender.com/scooby/api/cart/removeproduct?itemId=${itemId}`);
    
  }
  applyCoupon(couponCode: string): Observable<any> {
    const payload = { coupon: couponCode };
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/applycoupon`, payload);
  }
  increaseProductQuantity(productId: number): Observable<any> {
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/plusquantity?productId=${productId}`, {});
  }
  
  reduceProductQuantity(productId: number): Observable<any> {
    return this._httpClient.patch(`https://scoobyfamily.onrender.com/scooby/api/cart/minusquantity?productId=${productId}`, {});
  }


  placeCashOrder(cartId: string): Observable<any> {
    return this._httpClient.post(`https://scoobyfamily.onrender.com/scooby/api/order/cashorder?cartId=${cartId}`, {});
  }

  getCheckoutSession(cartId: string): Observable<any> {
    return this._httpClient.get(`https://scoobyfamily.onrender.com/scooby/api/order/checkout-session?cartId=${cartId}`);
  }

}


