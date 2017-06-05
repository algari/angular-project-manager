import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Issue} from "../models/issue.model";
/**
 * Created by agalvis on 05/06/2017.
 */

@Injectable()
export class IssueListService {

  constructor(private _http: Http) {

  }

  getAll(): Observable<Array<Issue>> {
    const url = 'http://172.104.91.187/issues';
    const headers = new Headers({'Content-Type': 'application/json'})
    const options = new RequestOptions({
      headers: headers
    });
    return this._http.get(url, options).map((response) => {
      console.log(response);
      return response.json();
    });
  }

  delete(_issue: Issue): Observable<Array<Issue>> {
    const url = `http://172.104.91.187/issues/${_issue.id}`;
    const headers = new Headers({'Content-Type': 'application/json'})
    const options = new RequestOptions({
      headers: headers
    });
    return this._http.delete(url, options).map((response) => {
      console.log(response);
      return response.json();
    });
  }
}
