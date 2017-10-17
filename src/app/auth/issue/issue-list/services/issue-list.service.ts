import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Issue} from "../models/issue.model";
import { HttpService } from "app/common/services/http.service";
import { Config } from "app/common/config";
import { AuthenticationService } from "app/common/services/authentication.service";

/**
 * Created by agalvis on 05/06/2017.
 */

@Injectable()
export class IssueListService extends HttpService{

  apiBaseURL: string = Config.API_SERVER_URL;

  constructor(public _http:Http,public _authService:AuthenticationService){
    super(_http);
  }

  getAll(): Observable<Array<Issue>> {
    const token = this._authService.user.api_token;
    const url = `${this.apiBaseURL}/issues`;
    return this.get(url, token);
  }

  deleteIssues(_issue: Issue){
    const token = this._authService.user.api_token;
    const url = `${this.apiBaseURL}/issues/${_issue.id}`;
    return this.delete(url,token);
  }
}
