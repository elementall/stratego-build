import { Component, OnInit } from '@angular/core';
import {Player} from '../../../models/player.model';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  doLogin(user: Player) {
    // Todo: Login into Spring Boot / Java Backend.

  }
}
