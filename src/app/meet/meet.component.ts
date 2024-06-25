import { Component, OnInit } from '@angular/core';
import { PetsService } from './../pets.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent implements OnInit {
  typeApi: any[] = [];
  productName: any[] = [];
  isfavorite: boolean;
  items = [
    { id: 1, label: 'Dog', checked: false, value: 'dog' },
    { id: 2, label: 'Cat', checked: false, value: 'cat' },
    { id: 3, label: 'All', checked: false, value: 'all' }
    

  ];
  api: any;
  constructor(private _PetsService:PetsService, private _toaster: ToastrService) { }

  ngOnInit(): void {
    this._PetsService.getProduct('').subscribe((response) => {
      this.productName = response.data;
    })
  }
  pageChange(event: any) {

  }
  checkboxChanged(event: any, item: any) {


    if (event.checked) {
      this.typeApi.push(item.value)
      this.api = this.typeApi.join('&type=')
      this._PetsService.getProduct(this.api).subscribe((response) => {
        this.productName = response.data;
      })


    } else {
      const filterId = this.typeApi.findIndex((elem) => elem == item.value);
      this.typeApi.splice(filterId, 1);
      this.api = this.typeApi.join('&type=')
      this._PetsService.getProduct(this.api).subscribe((response) => {
        this.productName = response.data;
      })
    }

  }
  toggleFavorite(product: any) {
    if (product.favorite) {
      this.isfavorite = true;

    }
    else {
      this.isfavorite = false;
    }

    this._PetsService.updateFavorite(product._id, this.isfavorite).subscribe((response) => {
      console.log(response);
      product.favorite = !product.favorite;
    });
  }


  


  // ... الرموز الأخرى

}
