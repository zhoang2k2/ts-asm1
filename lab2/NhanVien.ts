import { CanBo } from "./CanBo";

class NhanVien implements CanBo {
  private job: string;

  constructor(
    public fullname: string,
    public age: number,
    public gender: "male" | "female" | "others",
    public address: string,
    job: string
  ) {
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.job = job;
  }

  public get jobNhanVien() {
    return this.job;
  }

  public set jobNhanVien(theJob: string) {
    this.job = theJob;
  }
}

const jobArray: any[] = [
  new NhanVien("hoang", 22, "male", "dia chi", "front-end"),
  new NhanVien("khang", 20, "male", "dia chi 2", "recruiter"),
];

for (const nhanVien of jobArray) {
  console.log(nhanVien);
}
