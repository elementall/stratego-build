import {Player} from '../models/player.model';
import {Piece} from '../models/piece.model';

export class DataService {
  players: Player[] = [];
  initTestPlayers() {
    this.players.push(
      new Player('bas', 'brunink', 'Haarlem', 'bas.brunink@hva.nl', 'bas.brunink@hva.nl'),
      new Player('dave', 'dekker', 'Lisse', 'dave.dekker3@hva.nl', 'dave.dekker3@hva.nl'),
  );
  }
}
