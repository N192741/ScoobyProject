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
import {  HttpClientModule } from '@angular/common/http';
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
import { RouterModule, provideRoutes } from '@angular/router';
import { LearnMoreAdoptionComponent } from './learn-more-adoption/learn-more-adoption.component';
import { SheltersComponent } from './shelters/shelters.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { ShelterPetsComponent } from './shelter-pets/shelter-pets.component';
import { VetComponent } from './vet/vet.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AdminComponent } from './admin/admin.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { CodePassComponent } from './code-pass/code-pass.component';
import { ConfirmPassComponent } from './confirm-pass/confirm-pass.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { FavComponent } from './fav/fav.component';
import { MeetComponent } from './meet/meet.component';
import { AccountComponent } from './account/account.component';
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
    LearnMoreAdoptionComponent,    AdoptionComponent,
    DogsComponent,
    CatsComponent,
    FavComponent,
    MeetComponent,
    AccountComponent,



    SheltersComponent,
   SeeMoreComponent,
   ShelterPetsComponent,
   VetComponent,
   DoctorsComponent,
   AdminComponent,
   CodePassComponent,
   ConfirmPassComponent

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
    ToastrModule.forRoot(),
    TooltipModule.forRoot(),
   RatingModule.forRoot(),
   HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
