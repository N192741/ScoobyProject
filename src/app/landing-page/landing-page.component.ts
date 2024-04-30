import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  reviews:any []=[];

  constructor(private _HomeService:HomeService) { }

  ngOnInit(): void {
    this._HomeService.getreviews('reviews').subscribe((response)=>{
      this.reviews=response.allServices;
     })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag:false,
    dots:false,
    nav:true,
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

    },
  }
}
