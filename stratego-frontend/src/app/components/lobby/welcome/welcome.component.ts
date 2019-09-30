import { Component, OnInit } from '@angular/core';

import {Player} from '../../../models/player.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  signupClicked = false;
  loginClicked = false;
  loginPlayer: Player;




  constructor() { }

  ngOnInit() {
  }

  onLoginClicked() {
    this.loginClicked = true;
    this.signupClicked = false;

  }

  onSigninClicked() {
    this.signupClicked = true;
    this.loginClicked = false;

  }
}
