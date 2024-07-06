import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categoryApi: any[] = [];
  productName: any[] = [];
  dataSearch: string = '';
  isfavorite: boolean;
  items = [
    { id: 1, label: 'Medicine', checked: false, value: 'medicine' },
    { id: 2, label: 'Toys', checked: false, value: 'toys' },
    { id: 3, label: 'Grooming', checked: false, value: 'grooming' },
    { id: 4, label: 'Food', checked: false, value: 'food' },
    { id: 5, label: 'Accessories', checked: false, value: 'accessories' }

  ];
  api: any;
  constructor(private _ProductsService: ProductsService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this._ProductsService.getProduct('').subscribe((response) => {
      this.productName = response.data;
      console.log( response.data)
    })
  }
  pageChange(event: any) {

  }
  // checkbox filter
  checkboxChanged(event: any, item: any) {


    if (event.checked) {
      this.categoryApi.push(item.value)
      this.api = this.categoryApi.join('&category=')
      this._ProductsService.getProduct(this.api).subscribe((response) => {
        this.productName = response.data;
      })


    } else {
      const filterId = this.categoryApi.findIndex((elem) => elem == item.value);
      this.categoryApi.splice(filterId, 1);
      this.api = this.categoryApi.join('&category=')
      this._ProductsService.getProduct(this.api).subscribe((response) => {
        this.productName = response.data;
      })
    }

  }





  //get search
  getSearch(data: any) {
    this._ProductsService.getProductSearch(data).subscribe((res) => {
      this.productName = res.data;
    })
  }

  toggleFavorite(product: any) {
    if (product.favorite) {
      this.isfavorite = true;
      this._toaster.success("Your Item Removed Successfully");
      
      

    }
    else {
      this.isfavorite = false;
      this._toaster.success("Your Item Added Successfully");


    }

    this._ProductsService.updateFavorite(product._id, this.isfavorite).subscribe((response) => {
      console.log(response);
      product.favorite = !product.favorite;
    });
  }


  addToCart(product: any) {
    this._ProductsService.addToCart(product).subscribe((response) => {

      this._toaster.success('product added successfuly');

      
    });

  }


  
}





