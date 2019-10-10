export class Game {

  // TODO: Class attributes
  static lastID = 1;
  private id: number;
  public title: string;


  constructor(name: string) {
    this.id = Game.lastID;
    this.title = name;
    Game.lastID++;
  }

  // Todo: Getters and Setters
}
