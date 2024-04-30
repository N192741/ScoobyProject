import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BookService } from '../book.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogs:any []=[];
reviews:any []=[];
  constructor(private _HomeService:HomeService,private _BookService:BookService) { }
  searchForm:FormGroup=new FormGroup({
  lookingFor:new FormControl(null),
  Near:new FormControl(null,),
  Dates:new FormControl(null,)
  });
  search(searchInfo:FormGroup){
  }
  submitSearch(forminfo:FormGroup){
    this._BookService.Book(forminfo.value).subscribe((response)=>{});
  }

  ngOnInit(): void {

    this._HomeService.getBlogs('blogs').subscribe((response)=>{
this.blogs=response.data;
    })


   this._HomeService.getreviews('reviews').subscribe((response)=>{
    this.reviews=response.allServices;
   })
  }
  @ViewChild('owlCarousel') owlCarousel: any;
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


