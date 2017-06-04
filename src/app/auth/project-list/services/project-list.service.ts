import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

/** Importar los rxjs  uno por uno ya que son muchos*/
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

import {Project} from "../models/project.model";

/**
 * Created by agalvis on 04/06/2017.
 */

@Injectable()
export class ProjectListService{

  constructor(private _http:Http){

  }
  getAll():Observable<Array<Project>>{
    const url = 'http://172.104.91.187/projects';
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({
      headers:headers
    });

    return this._http.get(url,options).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  delete(_project:Project):Observable<Array<Project>>{
    const url = `http://172.104.91.187/projects/${_project.id}`;
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({
      headers:headers
    });

    return this._http.delete(url,options).map((response) => {
      console.log(response);
      return response.json();
    });
  }
}
