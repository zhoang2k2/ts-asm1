var Account = /** @class */ (function () {
    function Account(id, email, username, fullName, department, position) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.fullName = fullName;
        this.department = department;
        this.position = position;
        this.createDate = new Date();
    }
    Object.defineProperty(Account.prototype, "userId", {
        get: function () {
            return this.id;
        },
        set: function (theId) {
            if (theId <= 0) {
                throw new Error("ID is invalid!");
            }
            this.id = theId;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var myAccount = new Account(1, "thisIsEmail@gmail.com", "username", "fullname", "front-end", "fresher");
console.log(myAccount.userId);
console.log(myAccount.email);
console.log(myAccount.username);
console.log(myAccount.fullName);
console.log(myAccount.department);
console.log(myAccount.position);
console.log(myAccount.createDate);
