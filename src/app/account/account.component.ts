import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    name: new FormControl(null, [Validators.required]),

  });
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
    this._AuthService.getUser().subscribe((res)=>{
      this.accountForm.get('name').patchValue(res.data.data.name)
      this.accountForm.get('email').patchValue(res.data.data.email)
      console.log(res.data.data);
      localStorage.setItem('userName',JSON.stringify(res.data.data.name))
      
    })
    
  }
  submitaccount(accountForm){
    this._AuthService.updateUser(accountForm.value).subscribe((res)=>{
      localStorage.setItem('userName',JSON.stringify(res.data.data.name))
      location.reload()
      
    })
  }
}
