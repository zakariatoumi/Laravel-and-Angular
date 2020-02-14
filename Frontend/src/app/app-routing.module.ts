import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponceResetComponent } from './components/password/responce-reset/responce-reset.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'signup', component : SignupComponent },
  { path : 'profile', component : ProfileComponent },
  { path : 'request-password-reset', component : RequestResetComponent },
  { path : 'response-password-reset', component : ResponceResetComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
