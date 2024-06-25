
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService,private _toaster: ToastrService,
     private _Router: Router,private _http:HttpClient) { }
  error: string = '';
islog:boolean=false;
  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),

    } );
submitLogin(formInfo:FormGroup){
 this._AuthService.login(formInfo.value).subscribe((response)=>{
if(response.status =='success' && response.data.result.role == 'user'){
  localStorage.setItem('userToken',JSON.stringify(response.token));
  localStorage.setItem('userName', JSON.stringify(response.data.result.name));
this._AuthService.setUserData();
  this._Router.navigate(['/home']);
console.log('login');
}
else if  (response.status == 'success' && response.data.result.role =='admin') {
 localStorage.setItem('userToken',JSON.stringify(response.token));
 localStorage.setItem('userName', JSON.stringify(response.data.result.name));
  this._AuthService.setUserData();
 this._Router.navigate(['/admin']);
}
else if(response.status == 'fail') {
  console.log('fail');
  this.error=response.message;
this.islog=true;
}


  });
  

    
  }

  ngOnInit(): void {
  }

}

