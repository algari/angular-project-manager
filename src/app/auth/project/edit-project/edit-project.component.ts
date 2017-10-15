import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import {Router} from '@angular/router';
import {AlertsService, AlertType} from '@jaspero/ng2-alerts/dist';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { User } from "../../user/model/user.model";
import { UserService } from "../../user/service/user.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project: Project = <any>{};

  users: Array<User>;

  isLoading = true;

  constructor(private _projectService: ProjectService, private _router: Router,
    private _alert: AlertsService,public _activatedRoute: ActivatedRoute,private _userService:UserService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const id: number = params['id'];
       this.loadProject(id);
       this.isLoading = false;
       this.loadUsers();
    });
  }

  public loadProject(id: number) {
    return this._projectService.getSingle(id).subscribe((proj: Project) => {
      console.log(proj);
      this.project = proj;
    },
      errorResponse => {
        const errorData = errorResponse.json();
        this._alert.create('error', `Error al obtener el proyecto :( ${id}`,
          {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 3000
          });
        console.error(errorData.error);
      },
      () => {
        console.log('Finished loadProject');

      })
  }

  public loadUsers() {
    return this._userService.getAll().subscribe(
      (data: User[]) => {
        //next
        this.users = data;
      },
      errorResponse => {
        const errorData = errorResponse.json();
        this._alert.create('error', `Error al obtener los usuarios`,
          {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 3000
          });
        console.error(errorData.error);
      },
      () => {
        console.log('Finished loadUsers');

      })
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this._projectService.update(this.project).subscribe(
      (project: Project) => {
        this._alert.create('success', `Proyecto "${project.title}" ha sido editado.`,
          {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 3000
          });
        setTimeout(() => {
          this._router.navigate(['/auth/proyectos']);
        }, 3000);
      },
      errorResponse => {
        const errorData = errorResponse.json();
        this._alert.create('error', `Proyecto no se pudo editar :(`,
          {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 3000
          });
        console.error(errorData.error);
      },
      () => {
        console.log('Finished edit request');
      }
    );
  }

}
