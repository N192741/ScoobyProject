import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-discerption',
  templateUrl: './discerption.component.html',
  styleUrls: ['./discerption.component.css']
})
export class DiscerptionComponent implements OnInit {
  Id:string='';
  serviceProfile:any={};
  sliderService:any=[];
  imagesArray:any=[];
  services:any=[];
reviewsArray:any=[];
userId:any;
isReviewVisible: boolean = false;
isDescriptionVisible: boolean = false;
date:any;
  constructor(private _BookService:BookService ,private route: ActivatedRoute,private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.Id= params.get('Id');
  });
  }
  bookForm:FormGroup= new FormGroup({
    duration:new FormControl(null),
    date:new FormControl(null,),
  });
  reviewForm:FormGroup= new FormGroup({
    name :new FormControl(null,[Validators.required]),
   email:new FormControl(null,[Validators.email,Validators.required]),
   review:new FormControl(null),
   rating:new FormControl(null),
   });
  book(bookInfo:FormGroup){}
  review(reviewInfo:FormGroup){}
  submitBook(forminfo:FormGroup){
    this._BookService.Book(forminfo.value).subscribe((response)=>{});
  }
  submitReview(forminfo:FormGroup){
    this._BookService.review(forminfo.value,this.Id).subscribe((response)=>{});
  }

  ngOnInit(): void {

 this._BookService.getServiceDetails(this.Id).subscribe((response)=>{
this.serviceProfile=response.updatedDoc;
this.imagesArray=response.updatedDoc.imagesProfile;
this.reviewsArray=response.updatedDoc.reviewsOfService;
this.date=response.updatedDoc.reviewsOfService.createdAt;
 });

this._BookService.getServices('services').subscribe((response)=>{
  this.services=response.data;
});

}

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
    navText: ['', ''],

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

  showReviews() {
    this.isReviewVisible = true;
    this.isDescriptionVisible = false;
  }

  showDescription() {
    this.isReviewVisible = false;
    this.isDescriptionVisible = true;
  }

}




