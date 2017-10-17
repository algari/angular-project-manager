import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { Config } from '../../../common/config';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  apiBaseURL: string = Config.API_SERVER_URL;
  project: Project;

  constructor(
    public _activatedRoute: ActivatedRoute, private _projectService: ProjectService) { }

  ngOnInit() {
      this._activatedRoute.params.subscribe(params => {
      const id: number = params['id'];
       this.getSingle(id);  
    });
  }

  public getSingle(id: number) {
    return this._projectService.getSingle(id).subscribe((proj: Project) => {
      console.log(proj);
      this.project = proj;
    },
      errorResponse => {
        const errorData = errorResponse.json();
        // this._alert.create('error', `Error al obtener el proyecto :( ${id}`,
        //   {
        //     overlay: true,
        //     overlayClickToClose: true,
        //     showCloseButton: true,
        //     duration: 3000
        //   });
        // console.error(errorData.error);
      },
      () => {
        console.log('Finished getSingle');

      })
  }

}
