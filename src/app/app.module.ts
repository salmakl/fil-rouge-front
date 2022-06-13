import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstComponent } from './components/forms/first/first.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectlogoComponent } from './components/forms/selectlogo/selectlogo.component';
import { DnaFormComponent } from './components/forms/dna-form/dna-form.component';
import { ExistingDesignComponent } from './components/forms/existing-design/existing-design.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    ButtonComponent,
    SelectlogoComponent,
    DnaFormComponent,
    ExistingDesignComponent,

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
