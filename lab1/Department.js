var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Object.defineProperty(Department.prototype, "departmentName", {
        get: function () {
            return this.name;
        },
        set: function (theDepartment) {
            this.name = theDepartment;
        },
        enumerable: false,
        configurable: true
    });
    return Department;
}());
var department = new Department(1, "back-end");
console.log(department.id);
console.log(department.departmentName);
