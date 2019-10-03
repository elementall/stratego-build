import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Game} from '../../models/game.model';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  games: Game[] = [];
  row: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.games = this.dataService.games;
  }



  onSelected(game: Game, i: number) {
  }

}
