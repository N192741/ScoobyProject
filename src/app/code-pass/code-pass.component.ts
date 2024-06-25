import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-code-pass',
  templateUrl: './code-pass.component.html',
  styleUrls: ['./code-pass.component.css']
})
export class CodePassComponent implements OnInit {
userid:any;
  constructor(private _AuthService:AuthService,private _Router:Router) { }

  sendcode:FormGroup=new FormGroup({
   code :new FormControl(null,[Validators.required])
    } );
    submitcode(formInfo:FormGroup ){
this._AuthService.sendCode(formInfo.value).subscribe((response)=>{
  if(response.status == 'Success'){
    this.userid=response.userId;
    this._Router.navigate(['/confirm-pass',this.userid]);
    console.log( 'step 2 done');
    }

    });}

  ngOnInit(): void {
  }

}
