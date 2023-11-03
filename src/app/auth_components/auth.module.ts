import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutes

  ],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent, SignupComponent],

})
export class AuthModule { }
