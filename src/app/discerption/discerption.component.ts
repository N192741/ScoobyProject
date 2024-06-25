import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-discerption',
  templateUrl: './discerption.component.html',
  styleUrls: ['./discerption.component.css']
})
export class DiscerptionComponent implements OnInit {
  max = 5;
  rate = 0;
  isReadonly = false;

  overStar: number | undefined;
  percent = 0;

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;}
    stars:any []=['../../assets/images/material-symbols-light_star.png',
      '../../assets/images/material-symbols-light_star.png',
    '../../assets/images/material-symbols-light_star.png',
    '../../assets/images/material-symbols-light_star.png',
    '../../assets/images/material-symbols-light_star.png'];
  Id:string='';
  successMassege:any;
  serviceProfile:any={};
  sliderService:any=[];
  imagesArray:any=[];
  services:any=[];
reviewsArray:any=[];
serviceName:any=[];
userId:any;
isReviewVisible: boolean = false;
isDescriptionVisible: boolean = false;
date:any;
  constructor(private _BookService:BookService ,private route: ActivatedRoute,
    private router: Router,private _HomeService:HomeService,private _tostar:ToastrService) {
    this.route.paramMap.subscribe(params => {
      this.Id= params.get('Id');
  });
  }
  reviewForm:FormGroup= new FormGroup({
    name :new FormControl(null,[Validators.required]),
   email:new FormControl(null,[Validators.email,Validators.required]),
   review:new FormControl(null,[Validators.required]),
   rating:new FormControl(null),
   });


  bookForm:FormGroup= new FormGroup({
    duration:new FormControl(null),
    date:new FormControl(null,),
    serviceType:new FormControl(null),
  });
  submitbook(formInfo:FormGroup ){
    this._HomeService.BookService(formInfo.value).subscribe((response)=>{

      if(response.status == 'success'){
        this._tostar.success('Book done');
        console.log('book done');
   } });

  }
  submitReview(formInfo:FormGroup){
    this._BookService.review(formInfo.value,this.Id).subscribe((response)=>{

        if(response.status == '201'){
        this.successMassege='done';
        console.log('done');
        }
    });
  }

  ngOnInit(): void {

 this._BookService.getServiceDetails(this.Id).subscribe((response)=>{
this.serviceProfile=response.updatedDoc;
this.imagesArray=response.updatedDoc.imagesProfile;
this.reviewsArray=response.updatedDoc.reviewsOfService;
this.date=response.updatedDoc.reviewsOfService.createdAt;
this.serviceName=response.updatedDoc.name;
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




