import { Component, OnInit } from '@angular/core';
import {IssueListService} from "./services/issue-list.service";
import {Issue} from "./models/issue.model";
import {log} from "util";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  isLoading = true;
  issues:Array<Issue>;
  constructor(private _issueListService:IssueListService) { }

  ngOnInit() {
    this.getAllIssues();
  }

  private getAllIssues() {
    this._issueListService.getAll().subscribe(
      (data:Issue[])=>{
        this.issues = data;
        this.isLoading = false;
      },err =>{
        console.error(err);
      },
      () => {
        console.log('Finished!');
      }
    );
  }

  onDeleteIssue(_issue:Issue){
    this._issueListService.delete(_issue).subscribe(
      (data)=>{
        console.log(data);
        this.getAllIssues();
        this.isLoading = false;
      },err=>{
        console.error(err);
      },
      () => {
        console.log('Finished!');
      }
    );
  }
}
