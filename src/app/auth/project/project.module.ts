import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailProjectComponent} from "./detail-project/detail-project.component";
import {EditProjectComponent} from "./edit-project/edit-project.component";
import {NewProjectComponent} from "./new-project/new-project.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectService} from "./services/project.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../../modules/shared/shared.module";
import {ProjectRoutingModule} from "./project-routing.module";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    ProjectRoutingModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'confirm' // set defaults here
    })
  ],
  declarations: [
    DetailProjectComponent,
    EditProjectComponent,
    NewProjectComponent,
    ProjectListComponent,
  ],
  providers: [
    ProjectService
  ]
  ,exports:[
    ProjectListComponent
  ]
})
export class ProjectModule { }
