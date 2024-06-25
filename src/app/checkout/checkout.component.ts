import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartProducts: any[]= [];
  couponCode:any;
  paymentMethod:any;
  private cartId: string;
totalCartPrice:number=0;

  constructor(private _ProductsService:ProductsService, private _toaster: ToastrService,private _Router:Router ) { }

  ngOnInit(): void {
    this.getcartProducts();
  }
  getcartProducts(){
    this._ProductsService.getcartProducts().subscribe((response:any) => {
      this.cartProducts=response.data.cartItems;
      this.totalCartPrice=response.data.totalCartPrice;
      console.log(this.cartProducts);
      console.log(response.data._id);
this.cartId=response.data._id;
  });
  }
  deleteItemFromCart(itemId: any): void {
  
    this._ProductsService.deleteItemFromCart(itemId).subscribe((response) => {
      console.log("تم حذف العنصر:", itemId);
      
      this._toaster.success('product removed successfuly');
      this.getcartProducts();
    });
  }

  applyCoupon(): void {
    if (this.couponCode) {
      this._ProductsService.applyCoupon(this.couponCode).subscribe((response) => {
        this.totalCartPrice=response.data.totalPriceAfterDiscount;
        this._toaster.success("Coupon applied successfully");
       
       
  
      }, (error) => {
        this._toaster.error(error.error.message);
  
       
      });
    } else {
      
    }
  }
handlePaymentMethodChange(){
console.log(this.paymentMethod);
}
  placeOrder() {
    // تنفيذ الإجراءات المناسبة بناءً على طريقة الدفع المحددة
    if (this.paymentMethod === 'cashOnDelivery') {
      console.log("تم حذف العنصر:",this.cartId );
      // تنفيذ إجراءات الدفع عند الاستلام
      this._ProductsService.placeCashOrder(this.cartId).subscribe(
        (response) => {
          this._toaster.success("Your Order placed successfully");
          this._Router.navigate(['/home']);
          // إجراءات بعد نجاح الدفع عند الاستلام
        },
        (error) => {
          this._toaster.error("please check your data");
       
          // إجراءات في حالة حدوث خطأ أثناء الدفع عند الاستلام
        }
      );
    } else if (this.paymentMethod === 'payOnline') {

      // تنفيذ إجراءات الدفع عبر الإنترنت
      this._ProductsService.getCheckoutSession(this.cartId).subscribe(
        (session) => {
          console.log(session)
          window.open( session.session.url)
        },
        (error) => {
          // إجراءات في حالة حدوث خطأ أثناء إعداد الدفع عبر الإنترنت
        }
      );
    }
  }


  
}
