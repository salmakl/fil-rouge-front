import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { DnaFormComponent } from './components/forms/dna-form/dna-form.component';
import { SelectlogoComponent } from './components/forms/selectlogo/selectlogo.component';
import { ExistingDesignComponent } from './components/forms/existing-design/existing-design.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent },
  {path: 'home', component:LandingPageComponent },
  {path: 'nav', component:HeaderComponent },
  {path: 'footer', component:FooterComponent },
  {path: 'button', component:ButtonComponent },
  {path: 'dna', component:DnaFormComponent },
  {path: 'logos', component:SelectlogoComponent },
  {path: 'existing-design', component:ExistingDesignComponent },
  {path: 'dashboard', component:DashboardComponent },
  {path: 'contact', component:ContactComponent },
  {path: 'order-table', component:OrderTableComponent },
  {path: 'statistic-card', component:StatisticCardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
