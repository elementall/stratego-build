import {Component, OnInit} from '@angular/core';
import {GameService} from '../../../services/game/game.service';
import {Tile} from '../../../models/tile.model';
import {GameState} from '../../../models/gameState.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  tiles = this.gameService.tiles;
  selectedTile: Tile;
  firstSelectedTile: Tile;
  secondSelectedTile: Tile;
  firstTileSelected = false;
  // bluePieces = this.gameService.bluePieces;
  // redPieces = this.gameService.redPieces;
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.createBoard();
    this.gameService.createBluePieces();
    this.gameService.createRedPieces();
    this.gameService.gameState = GameState.setup;
  }


  tileSelected(xCoordinate: number, yCoordinate: number) {

    /* Todo: PlacePiece Opsplitsen in PlacePiece en Update Piece...
    Place Piece checken of veld in het setup gebied zit,
    UpdatePiece checken op kleur en rang en leeg veld
     */


    let idx;
    // find tile in Tiles Array
    this.selectedTile = this.tiles.find(x => x.xCoordinate === xCoordinate && x.yCoordinate === yCoordinate);
    // find index of selected tile
    idx = this.tiles.indexOf(this.selectedTile);
    // update tiles with new tile with piece

    if (this.gameService.gameState === GameState.setup && this.tiles[idx].walkable === true) {
      console.log('TileSelect Fired in Setup Mode');
      this.gameService.placePiece(this.gameService.selectedPiece, idx);
    } else if (this.gameService.gameState === GameState.atplay) {
      console.log('TileSelect Fired in Play Mode');
      if (this.firstTileSelected === false) {
        this.firstSelectedTile = this.selectedTile;
      }
      if (this.firstTileSelected === true) {
        console.log(this.firstSelectedTile);
        if (this.firstSelectedTile.piece.name === 'empty' && this.tiles[idx].piece.side === 'r') {
          alert('Not Allowed');

        } else {
          this.gameService.placePiece(this.firstSelectedTile.piece, idx);
          this.firstSelectedTile.piece = this.gameService.emptyPiece;
        }


      }

      this.firstTileSelected = !this.firstTileSelected;
    } else {
      alert('Not Allowed');
    }


  }

  setupDone() {
    this.gameService.gameState = GameState.atplay;
    console.log('Gamemode:  ' + this.gameService.gameState);
  }
}
