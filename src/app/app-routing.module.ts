import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectlogoComponent } from './components/selectlogo/selectlogo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';
import { DashComponent } from './pages/dash/dash.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent },
  {path: 'home', component:LandingPageComponent },
  {path: 'nav', component:HeaderComponent },
  {path: 'footer', component:FooterComponent },
  {path: 'button', component:ButtonComponent },
  {path: 'logos', component:SelectlogoComponent },
  {path: 'dashboard', component:DashboardComponent },
  {path: 'contact', component:ContactComponent },
  {path: 'order-table', component:OrderTableComponent },
  {path: 'statistic-card', component:StatisticCardComponent },
  {path: 'dash', component:DashComponent },
  {path: 'register', component:RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
