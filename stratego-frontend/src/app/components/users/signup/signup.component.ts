import {Component, OnInit} from '@angular/core';
import {Player} from '../../../models/player.model';
import {DataService} from '../../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newuser = new Player('username', 'password', 'Location', 'user@domain.nl', 'user@domain.nl');

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  addUser(newuser: Player) {
    console.log(this.dataService.players);
    // Todo: Checken of de gebruiker al bestaat.
    this.dataService.players.push(
      new Player(newuser.userName, newuser.password, newuser.location, newuser.email, newuser.avatar)
    );
    console.log(this.dataService.players);
    this.router.navigate(['/users/login']);


  }
}
