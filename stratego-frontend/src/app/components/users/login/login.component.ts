import {Component, OnInit} from '@angular/core';
import {Player} from '../../../models/player.model';
import {DataService} from '../../../services/data.service';
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
    const foundPlayer = this.dataService.players.find(x => x.getUsername() === user.getUsername()
      && x.getPassword() === user.getPassword());
    console.log(user);
    console.log(foundPlayer);

    if (foundPlayer) {
      this.dataService.loggedInUser = foundPlayer;
      this.router
        .navigate(['/lobby']);
      console.log(this.dataService.players);
    }
    if (!foundPlayer) {
      this.retry = true;
      this.router.navigate(['/users/login']);
    }

  }
}
