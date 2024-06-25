import { Component, OnInit ,ViewChild} from '@angular/core';
import { PetsService } from './../pets.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  Tops: any[] = [];
  Populars: any[] = [];
  Bests: any[] = [];
  SuccessfullAdoptions: any[] = [];
  blogs:any []=[];
  isfavorite: boolean;
  constructor(private _PetsService:PetsService) { }

  ngOnInit(): void {
    this._PetsService.getTop('').subscribe((Response)=>{
      this.Tops = Response.data.slice(0,3);
    })

    this._PetsService.getPopular('').subscribe((Response)=>{
      this.Populars = Response.data.slice(0,3);
    })
    this._PetsService.getBest('').subscribe((Response)=>{
      this.Bests= Response.data.slice(0,3);
    })

    this._PetsService.getSuccessfullAdoption('SuccessfullAdoption').subscribe((Response)=>{
      console.log(Response);
      this.SuccessfullAdoptions=Response.data;
     })
     this._PetsService.getBlogs('blogs').subscribe((response)=>{
      this.blogs=response.data;
          })
  }


  toggleFavorite(Top : any) {
    if (Top .favorite) {
      this.isfavorite = true;

    }
    else {
      this.isfavorite = false;
    }

    this._PetsService.updateFavorite(Top._id, this.isfavorite).subscribe((Response) => {
      console.log(Response);
      Top .favorite = !Top .favorite;
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
