import {Player} from '../models/player.model';
import {Piece} from '../models/piece.model';
import {Game} from '../models/game.model';

export class DataService {
  players: Player[] = [];
  loggedInUser: Player;
  games: Game[] = [];


  initTestPlayers() {
    this.players.push(
      new Player('bas', 'brunink', 'Haarlem', 'bas.brunink@hva.nl', 'bas.brunink@hva.nl'),
      new Player('dave', 'dekker', 'Lisse', 'dave.dekker3@hva.nl', 'dave.dekker3@hva.nl'),
    );
  }

  dummyGameData() {
    this.games.push(
      new Game('Against Frank'),
      new Game('Against Bas'),
      new Game('Against Dave'),
      new Game('Against Sjaak'),
      new Game('Against Henk'),
      new Game('Against John'),
      new Game('Against Michel'),
    );
  }
}
