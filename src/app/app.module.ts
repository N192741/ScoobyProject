import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
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
import { ToastrModule } from 'ngx-toastr';
import 'ngx-toastr/toastr.css';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    SignUpComponent,
    LogInComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    HelpComponent,
    TermsComponent,
    ShopComponent,
    FavoriteComponent,
    CartComponent,
    CheckoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
