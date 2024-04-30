import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';



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
  constructor(private _HomeService:HomeService,private route:ActivatedRoute,private _BookService:BookService) { }
  searchForm:FormGroup=new FormGroup({
    lookingFor:new FormControl(null),
    Near:new FormControl(null,),
    Dates:new FormControl(null,)
  });
  search(searchInfo:FormGroup){}

  submitsearch(forminfo:FormGroup){
    this._BookService.Book(forminfo.value).subscribe((response)=>{});
  }
  ngOnInit(): void {



    this._HomeService.getBlogs('blogs').subscribe((response)=>{
      this.blogs=response.data;
          })

this._HomeService.getServiecs('Serviecs').subscribe((response)=>{
  this.serviecs=response.allServices.slice(0,5);
})
  }



}
