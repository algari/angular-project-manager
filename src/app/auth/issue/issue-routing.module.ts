import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IssueListComponent } from 'app/auth/issue/issue-list/issue-list.component';

const routes: Routes = [
  {
    path: '', component: IssueListComponent 
  },
  // {
  //   path: 'detalle/:id', component: DetailIssueComponent, canActivate: [ AuthGuard ]
  // },
  // {
  //   path: 'nuevo', component: NewIssueComponent, canActivate: [ AuthGuard ]
  // },
  // {
  //   path: 'edit/:id', component: EditIssueComponent, canActivate: [ AuthGuard ]
  // },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})

export class IssueRoutingModule { }
