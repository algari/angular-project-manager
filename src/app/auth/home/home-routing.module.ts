import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "../../common/guards/auth.guard";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [ AuthGuard ]
  },
  {
    path: 'proyectos', loadChildren:'./../project/project.module#ProjectModule',
    data: { name: 'Proyectos' }, canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
