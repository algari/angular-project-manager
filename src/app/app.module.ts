import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import {ProjectListService} from "./auth/project-list/services/project-list.service";
import {HttpModule} from "@angular/http";
import { IssueListComponent } from './auth/issue-list/issue-list.component';
import {IssueListService} from "./auth/issue-list/services/issue-list.service";
import { LoginComponent } from './public/login/login.component';
import {Ng2Webstorage} from "ngx-webstorage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './auth/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {AuthenticationService} from "./common/services/authentication.service";
import {HttpService} from "./common/services/http.service";
import {AuthGuard} from "./common/guards/auth.guard";
import {PublicGuard} from "./common/guards/public.guard";
import { NotFoundComponent } from './common/not-found/not-found.component';
import { SortingComponent } from './common/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    IssueListComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,HttpModule,Ng2Webstorage,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes)
  ],
  providers: [ProjectListService,IssueListService,AuthenticationService,HttpService,AuthGuard,PublicGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
