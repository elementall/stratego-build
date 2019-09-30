import {Component, OnInit} from '@angular/core';
import {Player} from '../../../models/player.model';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newuser = new Player('username', 'password', 'Location', 'user@domain.nl', 'user@domain.nl');

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  addUser(newuser: Player) {
    console.log(this.dataService.players);
    // Todo: Checken of de gebruiker al bestaat.
    this.dataService.players.push(
      new Player(newuser.userName, newuser.passWord, newuser.location, newuser.email, newuser.avatar)
    );
    console.log(this.dataService.players);


  }
}
