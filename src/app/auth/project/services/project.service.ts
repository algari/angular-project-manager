import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpService } from '../../../common/services/http.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Project } from '../models/project.model';
import { Config } from '../../../common/config';
import { AuthenticationService } from '../../../common/services/authentication.service';

@Injectable()
export class ProjectService {

    apiBaseURL: string = Config.API_SERVER_URL;

    constructor(public _http: HttpService, private _authService: AuthenticationService) {

    }

    getAll(): Observable<Array<Project>> {
        const url = `${this.apiBaseURL}/projects`;
        return this._http.get(url, this._authService.user.api_token);
    }

    getSingle(id: number): Observable<Project> {
        const url = `${this.apiBaseURL}/projects/${id}`;
        return this._http.get(url, this._authService.user.api_token);
    }

    onDelete(project: Project) {
        const url = `${this.apiBaseURL}/projects/${project.id}`;
        return this._http.delete(url, this._authService.user.api_token);
    }

    create(project: Project) {
        const url = `${this.apiBaseURL}/projects`;
        return this._http.post(url,  project, this._authService.user.api_token);
    }

    update(project: Project) {
        const url = `${this.apiBaseURL}/projects/${project.id}`;
        return this._http.put(url,  project, this._authService.user.api_token);
    }
}