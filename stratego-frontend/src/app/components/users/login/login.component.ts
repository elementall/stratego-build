import { Component, OnInit } from '@angular/core';
import {Player} from '../../../models/player.model';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginplayer: Player;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  doLogin(user: Player):boolean {
    const foundUser = this.dataService.players.find(x => x.userName === user.userName);



    // Todo: Nu: User wat aangemaakt is verifieren met de user in de DataService.
    // Todo: Later: Login into Spring Boot / Java Backend.

  }
}
