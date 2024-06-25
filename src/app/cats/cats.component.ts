import { Component, OnInit ,ViewChild} from '@angular/core';
import { PetsService } from './../pets.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  Collections: any[] = [];
  Breeds: any[] = [];
  kids: any[] = [];
  SuccessfullAdoptions: any[] = [];
  blogs:any []=[];
  isfavorite: boolean;
  constructor(private _PetsService:PetsService) { }

  ngOnInit(): void {
    this._PetsService.getCollection('').subscribe((Response)=>{
      this.Collections= Response.data.slice(0,3);
    })

    this._PetsService.getBreed('').subscribe((Response)=>{
      this.Breeds= Response.data.slice(0,3);
    })

    this._PetsService.getkide('').subscribe((Response)=>{
      this.kids= Response.data.slice(0,3);
    })

    this._PetsService.getSuccessfullAdoption('SuccessfullAdoption').subscribe((Response)=>{
      console.log(Response);
      this.SuccessfullAdoptions=Response.data;
     })
     this._PetsService.getBlogs('blogs').subscribe((response)=>{
      this.blogs=response.data;
          })
  }

  toggleFavorite(Collection: any) {
    if (Collection.favorite) {
      this.isfavorite = true;

    }
    else {
      this.isfavorite = false;
    }

    this._PetsService.updateFavorite(Collection._id, this.isfavorite).subscribe((Response) => {
      console.log(Response);
      Collection.favorite = !Collection.favorite;
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

