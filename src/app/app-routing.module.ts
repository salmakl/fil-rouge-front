import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstComponent } from './components/forms/first/first.component';
import { ButtonComponent } from './components/button/button.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  {path: 'home', component:LandingPageComponent },
  {path: 'nav', component:HeaderComponent },
  {path: 'footer', component:FooterComponent },
  {path: 'form', component:FirstComponent },
  {path: 'button', component:ButtonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
