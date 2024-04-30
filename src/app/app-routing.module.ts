import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { HelpComponent } from './help/help.component';
import { ShopComponent } from './shop/shop.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';




const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"services", component:ServicesComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"log-in", component:LogInComponent},
  {path:"privacy-policy", component:PrivacyPolicyComponent},
  {path:"terms", component:TermsComponent},
  {path:"help", component:HelpComponent},
  {path:"shop", component:ShopComponent},
  {path:"favorite", component:FavoriteComponent},
  {path:"Cart", component:CartComponent},
  {path:"checkout", component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 


exports: [RouterModule]
})
export class AppRoutingModule { }
