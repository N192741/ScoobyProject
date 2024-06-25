import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _AuthService: AuthService,private _Router:Router ) { }
  error:string='';
  signupForm:FormGroup=new FormGroup({

    name :new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email :new FormControl(null,[Validators.email,Validators.required]),
    password :new FormControl(null,[Validators.required]),

    } );
  submitSignUp(formInfo:FormGroup ){
    this._AuthService.signup(formInfo.value).subscribe((response)=>{
if(response.status == 'success'){
this._Router.navigate(['/login']);
}
 else {
this.error=response.message;
}
    });
  }

  ngOnInit(): void {
  }

}
