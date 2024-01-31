import { CanBo } from "./CanBo";

class CongNhan implements CanBo {
  private level: number;

  constructor(
    public fullname: string,
    public age: number,
    public gender: "male" | "female" | "others",
    public address: string,
    level: number
  ) {
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.level = level;
  }

  public get CongNhanLevel() {
    return this.level;
  }

  public set CongNhanLevel(theLevel: number) {
    if (theLevel < 0 || theLevel > 10) {
      throw new Error(`invalid level: ${theLevel}`);
    }
    this.level = theLevel;
  }
}
const congNhanArray: any[] = [
  new CongNhan("hoang", 22, "male", "dia chi", 8),
  new CongNhan("nguyen", 18, "male", "dia chi 2", 1),
];

for (const congNhan of congNhanArray) {
  console.log(
    `name: ${congNhan.fullname}, age: ${congNhan.age}, level: ${congNhan.CongNhanLevel}`
  );
}
