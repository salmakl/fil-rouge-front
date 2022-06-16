import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectlogoComponent } from './components/forms/selectlogo/selectlogo.component';
import { DnaFormComponent } from './components/forms/dna-form/dna-form.component';
import { ExistingDesignComponent } from './components/forms/existing-design/existing-design.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { DnaComponent } from './components/dna/dna.component';
import { UploadComponent } from './components/upload/upload.component';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BoxComponent } from './components/box/box.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    SelectlogoComponent,
    DnaFormComponent,
    ExistingDesignComponent,
    CardComponent,
    FormComponent,
    DnaComponent,
    UploadComponent,
    ChekoutComponent,
    PricingComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    BoxComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
