import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueRoutingModule } from 'app/auth/issue/issue-routing.module';
import { IssuesButtonWatchComponent } from 'app/auth/issue/issue-list/issues-action/issues-button-watch/issues-button-watch.component';
import { IssuesButtonCloseComponent } from 'app/auth/issue/issue-list/issues-action/issues-button-close/issues-button-close.component';
import { IssuesButtonReasignComponent } from 'app/auth/issue/issue-list/issues-action/issues-button-reasign/issues-button-reasign.component';
import { IssueListComponent } from 'app/auth/issue/issue-list/issue-list.component';
import { IssueListService } from 'app/auth/issue/issue-list/services/issue-list.service';
import { SharedModule } from 'app/modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    IssueRoutingModule,
    SharedModule
  ],
  declarations: [
    IssuesButtonWatchComponent,
    IssuesButtonCloseComponent,
    IssuesButtonReasignComponent,
    IssueListComponent,
  ],
  exports:[
    IssueListComponent
  ],
  providers:[
    IssueListService
  ]
})
export class IssueModule { }
