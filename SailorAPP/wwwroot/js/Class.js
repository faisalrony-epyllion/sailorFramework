var Log = /** @class */ (function () {
    function Log(x, y) {
        this.x = x;
        this.y = y;
    }
    return Log;
}());
function LogPlus(p) {
    console.log("".concat(p.x, ",").concat(p.y));
}
var p = new Log(10, 20);
LogPlus(p);
//# sourceMappingURL=Class.js.map