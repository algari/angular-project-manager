import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpService } from '../../../common/services/http.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Config } from '../../../common/config';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { User } from "../model/user.model";

@Injectable()
export class UserService {

    apiBaseURL: string = Config.API_SERVER_URL;

    constructor(public _http: HttpService, private _authService: AuthenticationService) {

    }

    getAll(): Observable<Array<User>> {
        const url = `${this.apiBaseURL}/users`;
        return this._http.get(url, this._authService.user.api_token);
    }

}