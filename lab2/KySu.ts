import { CanBo } from "./CanBo";

class KySu implements CanBo {
  private industry: string;

  constructor(
    public fullname: string,
    public age: number,
    public gender: "male" | "female" | "others",
    public address: string,
    industry: string
  ) {
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.industry = industry;
  }

  public get KySuIndustry() {
    return this.industry;
  }

  public set KySuIndustry(theIndustry: string) {
    this.industry = theIndustry;
  }
}

const KySuArray: any[] = [
  new KySu("hoang", 22, "male", "dia chi", "IT"),
  new KySu("khang", 20, "male", "dia chi 2", "BA"),
];

for (const kySu of KySuArray) {
  console.log(kySu);
}
