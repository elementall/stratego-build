import {Player} from '../models/player.model';
import {Game} from '../models/game.model';
import {PlayerStatus} from '../models/playerStatus.enum';

export class DataService {
  players: Player[] = [];
  loggedInUser: Player;
  games: Game[] = [];
  editPlayer: Player;

  initTestPlayers() {
    this.players.push(
      new Player('bas', 'brunink'),
      new Player('dave', 'dekker'),
      new Player('john', 'somers'),
      new Player('michel', 'mercera'),
    );

    this.editPlayer = this.players.find(x => x.getUsername() === 'bas');
    this.editPlayer.setLocation('Haarlem');
    this.editPlayer.setEmail('bas@hva.nl');
    this.editPlayer.setAvatar('bas@hva.nl');
    this.editPlayer.setRank(5);
    this.editPlayer.setStatus(PlayerStatus.Online);
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'dave'));
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'john'));

    this.editPlayer = this.players.find(x => x.getUsername() === 'dave');
    this.editPlayer.setLocation('Lisse');
    this.editPlayer.setEmail('dave@hva.nl');
    this.editPlayer.setAvatar('dave@hva.nl');
    this.editPlayer.setRank(4);
    this.editPlayer.setStatus(PlayerStatus.Online);
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'bas'));
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'john'));

    this.editPlayer = this.players.find(x => x.getUsername() === 'john');
    this.editPlayer.setLocation('Amsterdam');
    this.editPlayer.setEmail('john@hva.nl');
    this.editPlayer.setAvatar('john@hva.nl');
    this.editPlayer.setRank(3);
    this.editPlayer.setStatus(PlayerStatus.Offline);
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'michel'));
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'dave'));

    this.editPlayer = this.players.find(x => x.getUsername() === 'michel');
    this.editPlayer.setLocation('Amsterdam');
    this.editPlayer.setEmail('michel@hva.nl');
    this.editPlayer.setAvatar('michel@hva.nl');
    this.editPlayer.setRank(2);
    this.editPlayer.setStatus(PlayerStatus.Online);
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'bas'));
    this.editPlayer.addFriend(this.players.find(x => x.getUsername() === 'john'));



    console.log(this.players);
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
