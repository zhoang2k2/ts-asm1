"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KySu = /** @class */ (function () {
    function KySu(fullname, age, gender, address, industry) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.industry = industry;
    }
    Object.defineProperty(KySu.prototype, "KySuIndustry", {
        get: function () {
            return this.industry;
        },
        set: function (theIndustry) {
            this.industry = theIndustry;
        },
        enumerable: false,
        configurable: true
    });
    return KySu;
}());
var KySuArray = [
    new KySu("hoang", 22, "male", "dia chi", "IT"),
    new KySu("khang", 20, "male", "dia chi 2", "BA"),
];
for (var _i = 0, KySuArray_1 = KySuArray; _i < KySuArray_1.length; _i++) {
    var kySu = KySuArray_1[_i];
    console.log(kySu);
}
