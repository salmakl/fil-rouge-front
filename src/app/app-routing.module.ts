import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstComponent } from './components/forms/first/first.component';
import { ButtonComponent } from './components/button/button.component';
import { DnaFormComponent } from './components/forms/dna-form/dna-form.component';
import { SelectlogoComponent } from './components/forms/selectlogo/selectlogo.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  {path: 'home', component:LandingPageComponent },
  {path: 'nav', component:HeaderComponent },
  {path: 'footer', component:FooterComponent },
  {path: 'form', component:FirstComponent },
  {path: 'button', component:ButtonComponent },
  {path: 'dna', component:DnaFormComponent },
  {path: 'logos', component:SelectlogoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
