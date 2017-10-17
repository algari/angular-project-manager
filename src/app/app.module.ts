import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import {Ng2Webstorage} from 'ngx-webstorage';

import {HttpService} from './common/services/http.service';
import {AuthenticationService} from './common/services/authentication.service'
import {PublicGuard} from './common/guards/public.guard';
import {AuthGuard} from './common/guards/auth.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { UserService } from "./auth/user/service/user.service";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2Webstorage,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'confirm' // set defaults here
    })
  ],
  providers: [
    HttpService,AuthenticationService,HttpService,PublicGuard, AuthGuard, // Guards
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
