import { Component, OnInit,ViewChild  } from '@angular/core';
import { VetService } from '../vet.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.component.html',
  styleUrls: ['./shelters.component.css']
})
export class SheltersComponent implements OnInit {
shelters :any []=[];
stars:any []=['../../assets/images/material-symbols-light_star.png',
  '../../assets/images/material-symbols-light_star.png',
'../../assets/images/material-symbols-light_star.png',
'../../assets/images/material-symbols-light_star.png',
'../../assets/images/material-symbols-light_star.png'];
SuccessfullAdoptions:any []=[];
  constructor(private _VetService:VetService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._VetService.getShelters('shelters').subscribe((response)=>{
      this.shelters=response.allShelters;
          })
    this._VetService.getSuccessfullAdoption('SuccessfullAdoption').subscribe((response)=>{
     this.SuccessfullAdoptions=response.data;
                })
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
      940: {
        items: 4
      },

    },
  }
}
