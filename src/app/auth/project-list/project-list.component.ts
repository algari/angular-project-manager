import { Component, OnInit } from '@angular/core';
import {ProjectListService} from "./services/project-list.service";
import {Project} from "./models/project.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  isLoading = true;
  projects:Array<Project>;

  constructor(private _projectListService:ProjectListService) { }

  ngOnInit() {
    this._projectListService.getAll().subscribe(
      (data: Project[])=> {
        this.projects = data;
        this.isLoading = false;
      },
      err => {
        console.error(err);
      },
      ()=>{
        console.log('Finished!');
      }
    )
  }

}
