import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../services/project.service';
import {Project} from "../models/project.model";
import {Config} from '../../../common/config';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  apiBaseURL: string = Config.API_SERVER_URL;
  isLoading = true;
  projects: Array<Project>;

  constructor(private _projectService: ProjectService,
              ) {
  }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this._projectService.getAll().subscribe(
      (data: Project[]) => {
        //next
        this.projects = data;
        this.isLoading = false;
      },
      err => {
        console.error(err);
        // this._alert.create('error', `Error al listar los proyectos :(`,
        //   {
        //     overlay: true,
        //     overlayClickToClose: true,
        //     showCloseButton: true,
        //     duration: 3000
        //   });
      },
      () => {
        console.log('Finished getAllProjects');

      }
    )
  }

  onDeleteProject(project: Project) {
    console.log(`Proyecto a eliminar: ${project.title}`);
    this._projectService.onDelete(project).subscribe((data) => {
        this.getAllProjects();
      },
      errorResponse => {
        const errorData = errorResponse.json();
        // this._alert.create('error', `Error al Eliminar el proyectos :( ${project.title}`,
        //   {
        //     overlay: true,
        //     overlayClickToClose: true,
        //     showCloseButton: true,
        //     duration: 3000
        //   });
        console.error(errorData.error);
      },
      () => {
        console.log('Finished onDeleteProject');

      })
  }

  public setData(sortedData) {
    console.log('sortedData: %o', sortedData);
    this.projects = sortedData;
  }

}
