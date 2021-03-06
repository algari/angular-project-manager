import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../common/services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _auth:AuthenticationService) { }

  ngOnInit() {
  }

  userName = this._auth.user.name;
}
