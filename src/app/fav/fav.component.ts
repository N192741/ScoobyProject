import { Component, OnInit } from '@angular/core';
import { PetsService } from './../pets.service';
@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  favoriteProducts: any[] = [];
  constructor(private _PetsService:PetsService) { }

  ngOnInit(): void {
    this.getFavoriteProducts();
  }
  getFavoriteProducts() {
    this._PetsService.getFavoriteProducts().subscribe((response:any) => {
      
      this.favoriteProducts=response.data;
      console.log( this.favoriteProducts);
    });
}
}