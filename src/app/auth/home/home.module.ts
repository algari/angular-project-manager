import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {RouterModule} from "@angular/router";
import {ProjectModule} from "../project/project.module";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    ProjectModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
