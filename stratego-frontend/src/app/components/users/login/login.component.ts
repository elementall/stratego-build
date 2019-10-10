import {Component, OnInit} from '@angular/core';
import {Player} from '../../../models/player.model';
import {DataService} from '../../../services/data.service';
import {isBoolean} from 'util';
import {LobbyComponent} from '../../lobby/lobby.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPlayer = new Player('', '');
  retry = false;
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  // Todo: foutmelding bij verkeerde login....
  // Todo: Later: Login into Spring Boot / Java Backend.

  doLogin(user: Player) {
    const foundPlayer = this.dataService.players.find(x => x.username === user.username && x.password === user.password);
    console.log(user);
    console.log(foundPlayer);
    if (foundPlayer) {
      this.dataService.loggedInUser = foundPlayer;
      this.router.navigate(['/lobby']);
    }
    if (!foundPlayer) {
      this.retry = true;
      this.router.navigate(['/users/login']);
    }

  }
}
