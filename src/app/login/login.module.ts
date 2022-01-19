import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';



@NgModule({
  declarations: [
    SignupComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignupComponent,
    SignoutComponent
  ]
})
export class LoginModule { }
