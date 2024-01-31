class Position {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public get positionId() {
    return this.id;
  }

  public set positionId(theId: number) {
    if (theId <= 0) {
      throw new Error("ID is invalid!");
    }
    this.id = theId;
  }

  public get positionName() {
    return this.name;
  }

  public set positionName(theName: string) {
    this.name = theName;
  }
}

let position = new Position(1, "fresher");

console.log(position.positionId);
console.log(position.positionName);
