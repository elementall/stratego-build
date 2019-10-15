import {Player} from './player.model';
import {GameState} from './gameState.enum';

export class Game {

  static lastID = 1;
  private id: number;
  public name: string;
  public redPlayer: Player;
  public bluePlayer: Player;
  public state: GameState;
  public winner: Player;

  constructor(name: string) {
    this.id = Game.lastID;
    this.name = name;
    Game.lastID++;
  }

  // Getters
  getId() { return this.id; }
  getName() {return this.name; }
  getRedPlayer() { return this.redPlayer; }
  getbluePlayer() { return this.bluePlayer; }
  getState() { return this.state; }
  getwinner() {return this.winner; }

  // Setters
  setId(id: number) {  this.id = id ; }
  setName(name: string) { this.name = name; }
  setRedPlayer(player: Player) {  this.redPlayer = player; }
  setbluePlayer(player: Player) {  this.bluePlayer = player; }
  setState(state: GameState) {  this.state = state; }
  setwinner(winner: Player) { this.winner = winner; }



}
