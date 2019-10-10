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
  newuser = new Player('username', 'password');

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  addUser(newuser: Player) {
    console.log(this.dataService.players);
    // Todo: Checken of de gebruiker al bestaat.
    this.dataService.players.push(
      new Player(newuser.username, newuser.password)
    );
    console.log(this.dataService.players);
    this.router.navigate(['/users/login']);


  }
}
