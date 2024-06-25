import { Component, OnInit,ViewChild } from '@angular/core';
import { PetsService } from './../pets.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
  petName: any[] = [];
  blogs:any []=[];
  Nears: any[] = [];
  isfavorite: boolean;
  api: any;
  SuccessfullAdoptions: any[] = [];
  constructor(private _PetsService:PetsService) { }

  ngOnInit(): void {
    this._PetsService.getpet('').subscribe((Response)=>{
      this.petName = Response.data.slice(15,18);
    })

    this._PetsService.getNear('').subscribe((Response)=>{
      this.Nears = Response.petsInShelters.slice(3,6);
    })
    this._PetsService.getBlogs('blogs').subscribe((response)=>{
      this.blogs=response.data;
          })

    this._PetsService.getSuccessfullAdoption('SuccessfullAdoption').subscribe((Response)=>{
      console.log(Response);
      this.SuccessfullAdoptions=Response.data;
     })
  }
  pageChange(event: any) {

  }

  toggleFavorite(Pet: any) {
    if (Pet.favorite) {
      this.isfavorite = true;

    }
    else {
      this.isfavorite = false;
    }

    this._PetsService.updateFavorite(Pet._id, this.isfavorite).subscribe((Response) => {
      console.log(Response);
      Pet.favorite = !Pet.favorite;
    });
    
  
 
  }
  @ViewChild('owlCarousel') owlCarousel: any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag:false,
    dots:false,
    nav:false,
    margin:20,
    center:true,
    rewind:true,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940:{
        items: 4
      }

    },
  }
}