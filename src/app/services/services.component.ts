import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  blogs:any []=[];
  serviecs:any[]=[];
  priceItem:number;
  rating = 2;
  stars:any []=['../../assets/images/material-symbols-light_star.png',
    '../../assets/images/material-symbols-light_star.png',
  '../../assets/images/material-symbols-light_star.png',
  '../../assets/images/material-symbols-light_star.png',
  '../../assets/images/material-symbols-light_star.png'];
  SuccessfullAdoptions:any []=[];
  constructor(private _HomeService:HomeService,private route:ActivatedRoute,
    private _BookService:BookService,private _toaster:ToastrService) { }
  bookForm:FormGroup=new FormGroup({
    serviceType:new FormControl(null),
    location:new FormControl(null,),
    date:new FormControl(null,)
  });
  submitbook(formInfo:FormGroup ){
    this._HomeService.BookService(formInfo.value).subscribe((response)=>{

      if(response.status == 'success'){
        this._toaster.success('Book done successfuly');
        console.log('book done');
   } });
  }
  ngOnInit(): void {

    this._HomeService.getBlogs('blogs').subscribe((response)=>{
      this.blogs=response.data;
          })

this._HomeService.getServiecs('Serviecs').subscribe((response)=>{
  this.serviecs=response.shuffledServices;
})
  }



}
