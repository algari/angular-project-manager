import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';
import {ProjectService} from './auth/project/services/project.service';
import { LoginComponent } from './public/login/login.component';
import {routes} from './routes';

import {Ng2Webstorage} from 'ngx-webstorage';

import {HttpService} from './common/services/http.service';
import { HomeComponent } from './auth/home/home.component';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from './common/services/authentication.service'
import {PublicGuard} from './common/guards/public.guard';
import {AuthGuard} from './common/guards/auth.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { SortingComponent } from './common/sorting/sorting.component';
import { NewProjectComponent } from './auth/project/new-project/new-project.component';
import { DetailProjectComponent } from './auth/project/detail-project/detail-project.component';
import { EditProjectComponent } from './auth/project/edit-project/edit-project.component';
import { UserService } from "./auth/user/service/user.service";
import { MomentPipePipe } from './common/pipes/moment-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    SortingComponent,
    NewProjectComponent,
    DetailProjectComponent,
    EditProjectComponent,
    MomentPipePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Ng2Webstorage,
    JasperoAlertsModule,
    BrowserAnimationsModule,
     ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'confirm' // set defaults here
    })
  ],
  providers: [
    ProjectService,HttpService,AuthenticationService,HttpService,PublicGuard, AuthGuard, // Guards
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
