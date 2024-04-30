import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { }
error:string='';
  sendEmailForm:FormGroup=new FormGroup({
    email :new FormControl(null,[Validators.email,Validators.required])
    } );
    submitSendEmail(formInfo:FormGroup ){
this._AuthService.forget(formInfo.value).subscribe((response)=>{
  if(response.status == 'success'){
    this._Router.navigate(['/login']);
    }
     else {
    this.error=response.message;
    }
    });}

  ngOnInit(): void {
  }

}
