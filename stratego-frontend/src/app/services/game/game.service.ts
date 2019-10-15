import { Injectable } from '@angular/core';
import {Tile} from '../../models/tile.model';
import {PieceStatus} from '../../models/piece-status.enum';
import {PieceName} from '../../models/piece-name.enum';
import {Piece} from '../../models/piece.model';
import {GameState} from '../../models/gameState.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public tiles: Tile[] = [];
  private nonWalkableTilesX: number[] = [4, 5];
  private nonWalkableTilesY: number[] = [2, 3, 6, 7];
  firstTileSelected = false;
  firstSelectedTile: Tile;
  secondSelectedTile: Tile;

  bluePieces: Piece[] = [];
  redPieces: Piece[] = [];
  emptyPiece = new Piece(0, '', 'none', -1, PieceName.Empty, PieceStatus.Levend, false, false);
  selectedPiece = this.emptyPiece;
  selectedTile: Tile;
  gameState: GameState;


  constructor() { }
  placePiece(piece: Piece, tileIdx: number) {
    if (this.tiles[tileIdx].walkable) {
      this.tiles[tileIdx].piece = piece;
      this.selectedPiece = this.emptyPiece;
    } else {
      alert('Je verdinkt en bent nu dus je stuk kwijt :D, jammer joh');
    }

  }




  createBoard() {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        this.tiles.push(this.createTile(x, y));
      }
    }
  }

  private createTile(x: number, y: number) {
    if (this.nonWalkableTilesX.includes(x) && this.nonWalkableTilesY.includes(y)) {
      return new Tile(x, y, false, this.emptyPiece);
    } else {
      return new Tile(x, y, true, this.emptyPiece );
    }

  }

  createBluePieces() {
    const side = 'b';
    this.bluePieces.push(
      new Piece(1, Piece.getImage(side, PieceName.Flag), side, 0, PieceName.Flag, PieceStatus.Levend, false, false),
      new Piece(2, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(3, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(4, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(5, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(6, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(7, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(8, Piece.getImage(side, PieceName.Marshal), side, 10, PieceName.Marshal, PieceStatus.Levend, true, false),
      new Piece(9, Piece.getImage(side, PieceName.General), side, 9, PieceName.General, PieceStatus.Levend, true, false),
      new Piece(10, Piece.getImage(side, PieceName.Colonel), side, 8, PieceName.Colonel, PieceStatus.Levend, true, false),
      new Piece(11, Piece.getImage(side, PieceName.Colonel), side, 8, PieceName.Colonel, PieceStatus.Levend, true, false),
      new Piece(12, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(13, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(14, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(15, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(16, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(17, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(18, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(19, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(20, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(21, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(22, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(23, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(24, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(25, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(26, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(27, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(28, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(29, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(30, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(31, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(32, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(33, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(34, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(35, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(36, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(37, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(38, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(39, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(40, Piece.getImage(side, PieceName.Spy), side, 1, PieceName.Spy, PieceStatus.Levend, true, false),
    );
  }

  createRedPieces() {
    const side = 'r';
    this.redPieces.push(
      new Piece(41, Piece.getImage(side, PieceName.Flag), side, 0, PieceName.Flag, PieceStatus.Levend, false, false),
      new Piece(42, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(43, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(44, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(45, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(46, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(47, Piece.getImage(side, PieceName.Bomb), side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(48, Piece.getImage(side, PieceName.Marshal), side, 10, PieceName.Marshal, PieceStatus.Levend, true, false),
      new Piece(49, Piece.getImage(side, PieceName.General), side, 9, PieceName.General, PieceStatus.Levend, true, false),
      new Piece(50, Piece.getImage(side, PieceName.Colonel), side, 8, PieceName.Colonel, PieceStatus.Levend, true, false),
      new Piece(51, Piece.getImage(side, PieceName.Colonel), side, 8, PieceName.Colonel, PieceStatus.Levend, true, false),
      new Piece(52, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(53, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(54, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(55, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(56, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(57, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(58, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(59, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(60, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(61, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(62, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(63, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(64, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(65, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(66, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(67, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(68, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(69, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(70, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(71, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(72, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(73, Piece.getImage(side, PieceName.Scout) , side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(74, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(75, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(76, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(77, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(78, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(79, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(80, Piece.getImage(side, PieceName.Spy), side, 1, PieceName.Spy, PieceStatus.Levend, true, false),
    );
  }


}


