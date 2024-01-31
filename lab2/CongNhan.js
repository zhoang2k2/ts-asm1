"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CongNhan = /** @class */ (function () {
    function CongNhan(fullname, age, gender, address, level) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.level = level;
    }
    Object.defineProperty(CongNhan.prototype, "CongNhanLevel", {
        get: function () {
            return this.level;
        },
        set: function (theLevel) {
            if (theLevel < 0 || theLevel > 10) {
                throw new Error("invalid level: ".concat(theLevel));
            }
            this.level = theLevel;
        },
        enumerable: false,
        configurable: true
    });
    return CongNhan;
}());
var congNhanArray = [
    new CongNhan("hoang", 22, "male", "dia chi", 8),
    new CongNhan("nguyen", 18, "male", "dia chi 2", 1),
];
for (var _i = 0, congNhanArray_1 = congNhanArray; _i < congNhanArray_1.length; _i++) {
    var congNhan = congNhanArray_1[_i];
    console.log("name: ".concat(congNhan.fullname, ", age: ").concat(congNhan.age, ", level: ").concat(congNhan.CongNhanLevel));
}
