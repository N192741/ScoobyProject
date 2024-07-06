import { Component, OnInit } from '@angular/core';
import { PetsService } from './../pets.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  favoriteProducts: any[] = [];
  isfavorite: boolean;
  constructor(private _PetsService:PetsService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this.getFavoriteProducts();
  }
  getFavoriteProducts() {
    this._PetsService.getFavoriteProducts().subscribe((response:any) => {
      
      this.favoriteProducts=response.data;
      console.log( this.favoriteProducts);
    });
}
toggleFavorite(product: any) {
  if (product.favorite) {
    this.isfavorite = false;
    this._PetsService.updateFavorite(product._id,true).subscribe((response) => {
      console.log(response);
      product.favorite = !product.favorite;
      this.getFavoriteProducts();
      this._toaster.success("Your Item Added Successfully");

    });
  }
  else {
    this.isfavorite = true;
    this._PetsService.updateFavorite(product._id, false).subscribe((response) => {
      console.log(response);
      product.favorite = !product.favorite;
      this.getFavoriteProducts();
      this._toaster.success("Your Item Removed Successfully");

    });
}
}
}