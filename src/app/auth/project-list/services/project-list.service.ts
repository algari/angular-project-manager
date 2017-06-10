import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

/** Importar los rxjs  uno por uno ya que son muchos*/
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

import {Project} from "../models/project.model";
import {Config} from "../../../common/config";
import {AuthenticationService} from "../../../common/services/authentication.service";
import {HttpService} from "../../../common/services/http.service";

/**
 * Created by agalvis on 04/06/2017.
 */

@Injectable()
export class ProjectListService extends  HttpService{

  apiBaseURL: string = Config.API_SERVER_URL;

  constructor(public _http:Http,public _authService:AuthenticationService){
    super(_http);
  }
  getAllSinAuth():Observable<Array<Project>>{
    const url = this.apiBaseURL+'/projects';
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({
      headers:headers
    });

    return this._http.get(url,options).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  public getAll(): Observable<Array<Project>> {
    //const projects: Array<Project> = [];
    const token = this._authService.user.api_token;
    const url = `${this.apiBaseURL}/projects`;

    //return this.get(url, this._authService.user.api_token);
    return this.get(url, token);
  }

  deleteSinAuth(_project:Project):Observable<Array<Project>>{
    const url = `${this.apiBaseURL}/projects/${_project.id}`;
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({
      headers:headers
    });

    return this._http.delete(url,options).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  deleteProject(_project:Project){
    const url = `${this.apiBaseURL}/projects/${_project.id}`;
    const token = this._authService.user.api_token;

    return this.delete(url,token);
  }
}
