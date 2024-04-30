import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteProducts: any[] = [];
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.getFavoriteProducts();
  }

  getFavoriteProducts() {
    this._ProductsService.getFavoriteProducts().subscribe((response:any) => {
      
      this.favoriteProducts=response.data;
      console.log( this.favoriteProducts);
    });
  }

}
