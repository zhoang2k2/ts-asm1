"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien = /** @class */ (function () {
    function NhanVien(fullname, age, gender, address, job) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.job = job;
    }
    Object.defineProperty(NhanVien.prototype, "jobNhanVien", {
        get: function () {
            return this.job;
        },
        set: function (theJob) {
            this.job = theJob;
        },
        enumerable: false,
        configurable: true
    });
    return NhanVien;
}());
var jobArray = [
    new NhanVien("hoang", 22, "male", "dia chi", "front-end"),
    new NhanVien("khang", 20, "male", "dia chi 2", "recruiter"),
];
for (var _i = 0, jobArray_1 = jobArray; _i < jobArray_1.length; _i++) {
    var nhanVien = jobArray_1[_i];
    console.log(nhanVien);
}
