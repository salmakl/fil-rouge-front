import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { DnaFormComponent } from './components/forms/dna-form/dna-form.component';
import { SelectlogoComponent } from './components/forms/selectlogo/selectlogo.component';
import { ExistingDesignComponent } from './components/forms/existing-design/existing-design.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  {path: 'home', component:LandingPageComponent },
  {path: 'nav', component:HeaderComponent },
  {path: 'footer', component:FooterComponent },
  {path: 'button', component:ButtonComponent },
  {path: 'dna', component:DnaFormComponent },
  {path: 'logos', component:SelectlogoComponent },
  {path: 'existing-design', component:ExistingDesignComponent },
  {path: 'dashboard', component:DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
