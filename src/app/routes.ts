import { Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
//import { ProjectsHomeComponent } from './auth/projects-home/projects-home.component';
import { ProjectListComponent } from './auth/project/project-list/project-list.component';
//import { IssuesListComponent } from './auth/issues-list/issues-list.component';
import { NewProjectComponent } from './auth/project/new-project/new-project.component';
import { EditProjectComponent } from './auth/project/edit-project/edit-project.component';
//import { NewIssueComponent } from './auth/issues-list/new-issue/new-issue.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PublicGuard } from './common/guards/public.guard';
import { DetailProjectComponent } from "./auth/project/detail-project/detail-project.component";

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [ PublicGuard ]
  },
  {
    path: 'home', component: HomeComponent, data: { name: 'Home' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'proyectos', component: ProjectListComponent, data: { name: 'Proyectos' }, canActivate: [ AuthGuard ],
  },
  {
    path: 'proyectos/detalle/:id', component: DetailProjectComponent, canActivate: [ AuthGuard ]
  },
  //{
    //path: 'issues', component: IssuesListComponent, data: { name: 'Issues' }, canActivate: [ AuthGuard ]
  //},
  {
    path: 'proyectos/nuevo', component: NewProjectComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'proyectos/edit/:id', component: EditProjectComponent, canActivate: [ AuthGuard ]
  },
  //{
    //path: 'issues/nuevo',
    //component: NewIssueComponent,
    //canActivate: [ AuthGuard ]
  //},
  {
    path: '**', component: NotFoundComponent
  }
];