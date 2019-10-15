import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game/game.service';
import {Tile} from '../../../models/tile.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  tiles = this.gameService.tiles;
  selectedTile: Tile;
  // bluePieces = this.gameService.bluePieces;
  // redPieces = this.gameService.redPieces;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.createBoard();
    this.gameService.createBluePieces();
    this.gameService.createRedPieces();
  }



  tileSelected(xCoordinate: number, yCoordinate: number) {
    console.log('TileSelect Fired');
    let idx;
    // find tile in Tiles Array
    this.selectedTile = this.tiles.find(x =>  x.xCoordinate === xCoordinate && x.yCoordinate === yCoordinate);


    // find index of selected tile
    idx = this.tiles.indexOf(this.selectedTile);

    console.log(this.tiles[idx]);
    // update tiles with new tile with piece
    this.tiles[idx].piece = this.gameService.selectedPiece;
    console.log(this.tiles[idx]);


  }
}
