export class Player {
  static lastId = 1;
  public id: number;

  // public games[]: Games


  constructor(
    public userName: string,
    public password: string,
    public location: string,
    public email: string,
    public avatar: string,
  ) {
    this.id = Player.lastId;
    Player.lastId++;
  }
}
