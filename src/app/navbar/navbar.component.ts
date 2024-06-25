import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoUrl:string="/src/assets/images/icon.png";
  isLogin:boolean=false;
  showDropdownMenu: boolean = false;
  userName:string='';
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
   this._AuthService.userData.subscribe(()=>{
    if(this._AuthService.userData.getValue() != null){
      this.isLogin=true;
     this.userName=this._AuthService.userName 
    }
    else{
      this.isLogin=false;
    }

   });
  }
  toggleDropdownMenu(): void {
    this.showDropdownMenu = !this.showDropdownMenu;
  }
callLogOut(){
  this._AuthService.logOut();

}
}
