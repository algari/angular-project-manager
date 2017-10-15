import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project.model';
import {Router} from '@angular/router';
import {AlertsService, AlertType} from '@jaspero/ng2-alerts/dist';
import { ProjectService } from '../services/project.service';
import { UserService } from "../../user/service/user.service";
import { User } from "../../user/model/user.model";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: Project = <any>{};

  isLoading = true;

  users: Array<User>;

  constructor(private _projectService: ProjectService, private _router: Router,
              private _alert: AlertsService,
            private _userService:UserService) {
  }

  ngOnInit() {
    this.loadUsers();
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
    this._projectService.create(this.project).subscribe(
      (project: Project) => {
        this._alert.create('success', `Proyecto "${project.title}" ha sido creado.`,
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
        this._alert.create('error', `Proyecto no se pudo crear :(`,
          {
            overlay: true,
            overlayClickToClose: true,
            showCloseButton: true,
            duration: 3000
          });
        console.error(errorData.error);
      },
      () => {
        console.log('Finished creation request');
      }
    );
  }

}
