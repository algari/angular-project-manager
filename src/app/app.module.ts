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

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [ProjectListService,IssueListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
