import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteProducts: any[] = [];
  isfavorite: boolean;

  constructor(private _ProductsService:ProductsService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.getFavoriteProducts();
  }

  getFavoriteProducts() {
    this._ProductsService.getFavoriteProducts().subscribe((response:any) => {
      
      this.favoriteProducts=response.data;
      console.log( this.favoriteProducts);
    });
  }
  toggleFavorite(product: any) {
    if (product.favorite) {
      this.isfavorite = false;
      this._ProductsService.updateFavorite(product._id,true).subscribe((response) => {
        console.log(response);
        product.favorite = !product.favorite;
        this.getFavoriteProducts();
      this._toaster.success("Your Item Added Successfully");

      });
    }
    else {
      this.isfavorite = true;
      this._ProductsService.updateFavorite(product._id, false).subscribe((response) => {
        console.log(response);
        product.favorite = !product.favorite;
        this.getFavoriteProducts();
      this._toaster.success("Your Item Removed Successfully");


      });
    }

  
  }

}
