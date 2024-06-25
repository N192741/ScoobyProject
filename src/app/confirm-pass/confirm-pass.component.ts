import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.css']
})
export class ConfirmPassComponent implements OnInit {
idofuser:string='';
  constructor(private _AuthService:AuthService,private route: ActivatedRoute,private _Router:Router) {
    this.route.paramMap.subscribe(params => {
      this.idofuser= params.get('userid');
  });
  }
  confirmPass:FormGroup=new FormGroup({
    password:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required])
     } );
     submitpass(formInfo:FormGroup ){
      this._AuthService.confirmpass(formInfo.value,this.idofuser).subscribe((response)=>{
        if(response.status == 'success'){
          this._Router.navigate(['/home']);
          console.log( 'step 3done');
          }});}
  ngOnInit(): void {
  }

}
