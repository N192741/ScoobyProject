import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HelpComponent } from './help/help.component';
import { TermsComponent } from './terms/terms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import 'ngx-toastr/toastr.css';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DiscerptionComponent } from './discerption/discerption.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoreComponent } from './more/more.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    HelpComponent,
    TermsComponent,
    ShopComponent,
    FavoriteComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    SignupComponent,
    DiscerptionComponent,
    LandingPageComponent,
    MoreComponent,
    ResetpasswordComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule ,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
