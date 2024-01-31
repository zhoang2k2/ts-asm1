class Department {
  id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public get departmentName() {
    return this.name;
  }

  public set departmentName(theDepartment: string) {
    this.name = theDepartment;
  }
}

let department = new Department(1, "back-end");

console.log(department.id);
console.log(department.departmentName);
