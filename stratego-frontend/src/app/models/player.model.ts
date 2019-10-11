import {PlayerStatus} from './playerStatus.enum';
import {Game} from './game.model';

export class Player {
  static lastId = 1;
  private id: number;
  private location: string;
  private email: string;
  private avatar: string;
  private rank: number;
  private status: PlayerStatus;
  private friends: Player[] = [];
  private games: Game[] = [];

  constructor(
    private username: string,
    private password: string,

  ) {
    this.id = Player.lastId;
    Player.lastId++;
  }


  // Getters
  getId() { return this.id; }
  getUsername() { return this.username; }
  getPassword() { return this.password; }
  getLocation() { return this.location; }
  getEmail() { return this.email; }
  getAvatar() { return this.avatar; }
  getRank() { return this.rank; }
  getStatus() {return this.status; }
  getAllFriends() { return this.friends; }
  getOneFriend(id: number) { return this.friends.find(x => x.id === id); } // werkt dit??????
  getAllGames() { return this.games; }
  getOneGame(id: number) { return this.games.find(x => x.getId() === id ); }

  // Setters
  setID(id: number) { this.id = id; }
  setUsername(uname: string) { this.username = uname; }
  setPassword(pword: string) { this.password = pword; }
  setLocation(loc: string) { this.location = loc; }
  setEmail(email: string) { this.email = email; }
  setAvatar(avatar: string) { this.avatar = avatar; }
  setRank(rank: number) { this.rank = rank; }
  setStatus(status: PlayerStatus) {this.status = status; }

  // Methods
  addFriend(player: Player) {
    this.friends.push(player);
  }

  removeFriend(player: Player) {
    const idx = this.friends.indexOf(this.friends.find(x => x.getId() === player.getId()));
    this.friends.slice(idx, 1);
  }

  addGame(game: Game) {
    this.games.push(game);
  }

  updateGame(game: Game) {
    const idx = this.games.indexOf(this.games.find(x => x.getId() === game.getId()));
    this.games[idx] = game;

  }
  removeGame(game: Game) {
    const idx = this.games.indexOf(this.games.find(x => x.getId() === game.getId()));
    this.games.slice(idx, 1);
  }



}
