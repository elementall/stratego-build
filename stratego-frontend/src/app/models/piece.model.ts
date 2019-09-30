
import {PieceName} from './piece-name.enum';
import {PieceStatus} from './piece-status.enum';

export class Piece {
  constructor(
    public id: number,
    public img: string,
    public side: string,
    public value: number,
    public name: PieceName,
    public status: PieceStatus,
    public movable: boolean,
    public runnable: boolean) {

  }

  public static getImage(side, name: string ): string {
    return './assets/img/game/standaard/'+ side + name + '.jpg';

  }


  public toString(): string {
    return `${this.name.toString()}`;
  }
}
