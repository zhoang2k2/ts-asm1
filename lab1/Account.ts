class Account {
  private id: number;
  public email: string;
  public username: string;
  public fullName: string;
  public department: string;
  public position: string;
  public createDate: Date;

  constructor(
    id: number,
    email: string,
    username: string,
    fullName: string,
    department: string,
    position: string
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.fullName = fullName;
    this.department = department;
    this.position = position;
    this.createDate = new Date();
  }

  public get userId() {
    return this.id;
  }

  public set userId(theId: number) {
    if (theId <= 0) {
      throw new Error("ID is invalid!");
    }
    this.id = theId;
  }
}

const myAccount = new Account(
  1,
  "thisIsEmail@gmail.com",
  "username",
  "fullname",
  "front-end",
  "fresher"
);

console.log(myAccount.userId);
console.log(myAccount.email);
console.log(myAccount.username);
console.log(myAccount.fullName);
console.log(myAccount.department);
console.log(myAccount.position);
console.log(myAccount.createDate);
