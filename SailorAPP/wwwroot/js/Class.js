var Log = /** @class */ (function () {
    function Log(x, y) {
        this.x = x;
        this.y = y;
    }
    return Log;
}());
function LogPlus(p) {
    console.log(p.x + "," + p.y);
}
var p = new Log(10, 20);
LogPlus(p);
//# sourceMappingURL=Class.js.map