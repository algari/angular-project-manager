import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {FormsModule} from "@angular/forms";
import { AppCustomUsernameDirective } from 'app/public/login/directives/app-custom-username.directive';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    AppCustomUsernameDirective,
  ]
})
export class LoginModule { }
