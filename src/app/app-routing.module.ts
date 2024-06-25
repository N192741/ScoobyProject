import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { ShopComponent } from './shop/shop.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { DiscerptionComponent } from './discerption/discerption.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoreComponent } from './more/more.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { FavComponent } from './fav/fav.component';
import { MeetComponent } from './meet/meet.component';
import { AccountComponent } from './account/account.component';




const routes: Routes = [
  {path:" ", redirectTo:"/login" , pathMatch:"full"},
  {path:"home", canActivate:[AuthGuard] ,component:HomeComponent},
  {path:"footer" ,component:FooterComponent},
  {path:"landing-page" ,component:LandingPageComponent},
  {path:"more" ,component:MoreComponent},
  {path:"services", canActivate:[AuthGuard] ,component:ServicesComponent},
  {path:"discerption/:Id", canActivate:[AuthGuard] ,component:DiscerptionComponent},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"terms", component:TermsComponent},
  {path:"resetpassword", component:ResetpasswordComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"help", component:HelpComponent},
  {path:"shop",canActivate:[AuthGuard] , component:ShopComponent},
  {path:"favorite",canActivate:[AuthGuard] , component:FavoriteComponent},
  {path:"cart",canActivate:[AuthGuard] , component:CartComponent},
  {path:"checkout",canActivate:[AuthGuard] , component:CheckoutComponent},
  {path:"adoption",canActivate:[AuthGuard] , component:AdoptionComponent},
  {path:"dogs",canActivate:[AuthGuard] , component:DogsComponent},
  {path:"cats",canActivate:[AuthGuard] , component:CatsComponent},
  {path:"fav",canActivate:[AuthGuard] , component:FavComponent},
  {path:"meet",canActivate:[AuthGuard] , component:MeetComponent},
  {path:"account",canActivate:[AuthGuard] , component:AccountComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 



exports: [RouterModule]
})
export class AppRoutingModule { }
