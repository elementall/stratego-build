import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  tiles = this.gameService.tiles;
  // bluePieces = this.gameService.bluePieces;
  // redPieces = this.gameService.redPieces;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.createBoard();
    this.gameService.createBluePieces();
    this.gameService.createRedPieces();
  }

  selectedTile(xCoordinate: number, yCoordinate: number) {

  }
}
