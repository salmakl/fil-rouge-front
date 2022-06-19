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
import { BrandComponent } from './components/brand/brand.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientListItemComponent } from './components/client-list-item/client-list-item.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { ProfilCardComponent } from './components/profil-card/profil-card.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { AdminsComponent } from './pages/admins/admins.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';


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
    BrandComponent,
    PriceCardComponent,
    ClientCardComponent,
    ClientListItemComponent,
    OrderTableComponent,
    ProfilCardComponent,
    StatisticCardComponent,
    ClientsComponent,
    AdminsComponent,
    OrdersComponent,
    ProfileComponent,

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
