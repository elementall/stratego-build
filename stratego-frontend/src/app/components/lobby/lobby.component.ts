import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Game} from '../../models/game.model';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  games: Game[] = [];
  friends: Player[] =[];
  row: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.games = this.dataService.games;
    this.friends = this.dataService.loggedInUser.friends;
  }



  onSelected(game: Game, i: number) {
  }

}
