import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router ,private _http:HttpClient) { }
  productForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
   user:new FormControl(null,[Validators.required]),
    desc:new FormControl(null,[Validators.required]),
    category:new FormControl(null,[Validators.required]),
    productImage:new FormControl(),
    check:new FormControl(),
    price:new FormControl(null,[Validators.required]),

    } );
    submitproduct(formInfo:FormGroup ){
      this._AuthService.addProduct(formInfo.value).subscribe((response)=>{
        if(response.status == 'success'){
          console.log('product done');
     } });
    }
  ngOnInit(): void {
  }

}
