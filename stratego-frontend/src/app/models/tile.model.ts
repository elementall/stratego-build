import { Piece } from './piece.model';

export class  Tile {
  constructor(
    public xCoordinate: number,
    public yCoordinate: number,
    public walkable: boolean,
    public piece: Piece
  ) {}

  public toString(): string {
    return(`${this.xCoordinate},${this.yCoordinate}`);
  }


}
