import {PlayerStatus} from './playerStatus.enum';
import {Game} from './game.model';

export class Player {
  static lastId = 1;
  public id: number;
  public location: string;
  public email: string;
  public avatar: string;
  public status: PlayerStatus;
  public friends: Player[] = [];
  public games: Game[] = [];

  // public games[]: Games


  constructor(
    public username: string,
    public password: string,

  ) {
    this.id = Player.lastId;
    Player.lastId++;
  }

  // Todo: Getters and Setters
  //
  //
  // setUsername() {
  //
  // }
}
