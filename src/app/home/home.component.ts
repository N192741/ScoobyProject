import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
blogs:any []=[];
reviews:any []=[];
stars:any []=['../../assets/images/material-symbols-light_star.png',
  '../../assets/images/material-symbols-light_star.png',
'../../assets/images/material-symbols-light_star.png',
'../../assets/images/material-symbols-light_star.png',
'../../assets/images/material-symbols-light_star.png'];
  constructor(private _HomeService:HomeService,private _BookService:BookService,
    private _toaster:ToastrService,private _AuthService:AuthService) { }
  bookForm:FormGroup=new FormGroup({
  serviceType:new FormControl(null),
  location:new FormControl(null,),
  date:new FormControl(null,)
  });
  submitbook(formInfo:FormGroup ){
    this._HomeService.BookService(formInfo.value).subscribe((response)=>{

      if(response.status == 'success'){
        this._toaster.success('Book done ');
        console.log('book done');
   } });
  }
  ngOnInit(): void {

    this._HomeService.getBlogs('blogs').subscribe((response)=>{
this.blogs=response.data;
    })


   this._HomeService.getreviews('reviews').subscribe((response)=>{
    this.reviews=response.shuffledServices;
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


