import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartProducts: any[]= [];
  couponCode:any;

totalCartPrice:number=0;
  constructor(private _ProductsService:ProductsService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.getcartProducts();
  }
  getcartProducts(){
    this._ProductsService.getcartProducts().subscribe((response:any) => {
      this.cartProducts=response.data.cartItems;
      this.totalCartPrice=response.data.totalCartPrice;
      console.log(this.cartProducts);
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

  
}
