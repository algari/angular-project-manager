import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {ProjectListComponent} from "./project-list/project-list.component";
import {AuthGuard} from "../../common/guards/auth.guard";
import {DetailProjectComponent} from "./detail-project/detail-project.component";
import {NewProjectComponent} from "./new-project/new-project.component";
import {EditProjectComponent} from "./edit-project/edit-project.component";

const routes: Routes = [
  {
    path: '', component: ProjectListComponent },
  {
    path: 'detalle/:id', component: DetailProjectComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'nuevo', component: NewProjectComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'edit/:id', component: EditProjectComponent, canActivate: [ AuthGuard ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ProjectRoutingModule { }
