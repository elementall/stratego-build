import { Injectable } from '@angular/core';
import {Tile} from '../../models/tile.model';
import {PieceStatus} from '../../models/piece-status.enum';
import {PieceName} from '../../models/piece-name.enum';
import {Piece} from '../../models/piece.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public tiles: Tile[] = [];
  private nonWalkableTilesX: number[] = [4, 5];
  private nonWalkableTilesY: number[] = [2, 3, 6, 7];

  bluePieces: Piece[] = [];
  redPieces: Piece[] = [];
  emptyPiece = new Piece(0, '', 'none', 0, PieceName.Empty, PieceStatus.Levend, false, false);
  selectedPiece = this.emptyPiece;


  constructor() { }

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
    const side = 'blue';
    this.bluePieces.push(
      new Piece(1, '../../assets/img/game/standaard/b0.jpg', side, 0, PieceName.Flag, PieceStatus.Levend, false, false),
      new Piece(2, '../../assets/img/b11.jpg', side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(3, '../../assets/img/b11.jpg', side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(4, '../../assets/img/b11.jpg', side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(5, '../../assets/img/b11.jpg', side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(6, '../../assets/img/b11.jpg', side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(7, '../../assets/img/b11.jpg', side, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(8, '../../assets/img/b10.jpg', side, 10, PieceName.Marshal, PieceStatus.Levend, true, true),
      new Piece(9, '../../assets/img/b9.jpg', side, 9, PieceName.General, PieceStatus.Levend, true, true),
      new Piece(10, '../../assets/img/b8.jpg', side, 8, PieceName.Colonel, PieceStatus.Levend, true, true),
      new Piece(11, '../../assets/img/b8.jpg', side, 8, PieceName.Colonel, PieceStatus.Levend, true, true),
      new Piece(12, '../../assets/img/b7.jpg', side, 7, PieceName.Major, PieceStatus.Levend, true, true),
      new Piece(13, '../../assets/img/b7.jpg', side, 7, PieceName.Major, PieceStatus.Levend, true, true),
      new Piece(14, '../../assets/img/b7.jpg', side, 7, PieceName.Major, PieceStatus.Levend, true, true),
      new Piece(15, '../../assets/img/b6.jpg', side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(16, '../../assets/img/b6.jpg', side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(17, '../../assets/img/b6.jpg', side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(18, '../../assets/img/b6.jpg', side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(19, '../../assets/img/b5.jpg', side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(20, '../../assets/img/b5.jpg', side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(21, '../../assets/img/b5.jpg', side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(22, '../../assets/img/b5.jpg', side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(23, '../../assets/img/b4.jpg', side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(24, '../../assets/img/b4.jpg', side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(25, '../../assets/img/b4.jpg', side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(26, '../../assets/img/b4.jpg', side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(27, '../../assets/img/b3.jpg', side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(28, '../../assets/img/b3.jpg', side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(29, '../../assets/img/b3.jpg', side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(30, '../../assets/img/b3.jpg', side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(31, '../../assets/img/b3.jpg', side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(32, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(33, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(34, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(35, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(36, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(37, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(38, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(39, '../../assets/img/b2.jpg', side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(40, '../../assets/img/b1.jpg', side, 1, PieceName.Spy, PieceStatus.Levend, true, true),
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
      new Piece(48, Piece.getImage(side, PieceName.Marshal), side, 10, PieceName.Marshal, PieceStatus.Levend, true, true),
      new Piece(49, Piece.getImage(side, PieceName.General), side, 9, PieceName.General, PieceStatus.Levend, true, true),
      new Piece(50, Piece.getImage(side, PieceName.Colonel), side, 8, PieceName.Colonel, PieceStatus.Levend, true, true),
      new Piece(51, Piece.getImage(side, PieceName.Colonel), side, 8, PieceName.Colonel, PieceStatus.Levend, true, true),
      new Piece(52, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, true),
      new Piece(53, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, true),
      new Piece(54, Piece.getImage(side, PieceName.Major), side, 7, PieceName.Major, PieceStatus.Levend, true, true),
      new Piece(55, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(56, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(57, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(58, Piece.getImage(side, PieceName.Captain), side, 6, PieceName.Captain, PieceStatus.Levend, true, true),
      new Piece(59, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(60, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(61, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(62, Piece.getImage(side, PieceName.Lieutenant), side, 5, PieceName.Lieutenant, PieceStatus.Levend, true, true),
      new Piece(63, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(64, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(65, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(66, Piece.getImage(side, PieceName.Sergeant), side, 4, PieceName.Sergeant, PieceStatus.Levend, true, true),
      new Piece(67, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(68, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(69, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(70, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(71, Piece.getImage(side, PieceName.Miner), side, 3, PieceName.Miner, PieceStatus.Levend, true, true),
      new Piece(72, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(73, Piece.getImage(side, PieceName.Scout) , side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(74, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(75, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(76, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(77, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(78, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(79, Piece.getImage(side, PieceName.Scout), side, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(80, Piece.getImage(side, PieceName.Spy), side, 1, PieceName.Spy, PieceStatus.Levend, true, true),
    );
  }


}


