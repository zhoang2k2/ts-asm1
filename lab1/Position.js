var Position = /** @class */ (function () {
    function Position(id, name) {
        this.id = id;
        this.name = name;
    }
    Object.defineProperty(Position.prototype, "positionId", {
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
    Object.defineProperty(Position.prototype, "positionName", {
        get: function () {
            return this.name;
        },
        set: function (theName) {
            this.name = theName;
        },
        enumerable: false,
        configurable: true
    });
    return Position;
}());
var position = new Position(1, "fresher");
console.log(position.positionId);
console.log(position.positionName);
