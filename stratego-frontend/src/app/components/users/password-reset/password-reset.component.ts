import { Component, OnInit } from '@angular/core';
import {Player} from '../../../models/player.model';
import {DataService} from '../../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  loginPlayer = new Player('', '', '', '', '');
  newPassword = '';
  retry = false;
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  reset(user: Player) {
    const foundPlayer = this.dataService.players.find(x => x.userName === user.userName && x.password === user.password);
    if (foundPlayer) {
      foundPlayer.password = this.newPassword;
      this.dataService.loggedInUser = foundPlayer;
      this.router.navigate(['/users/login']);

    }
    if (!foundPlayer) {
      this.retry = true;
      this.router.navigate(['/users/passwordReset']);
    }


  }
}
