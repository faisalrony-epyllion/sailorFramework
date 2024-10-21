class Log {
    x: number
    y: number

    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

function LogPlus(p: Log) {
    console.log(`${p.x},${p.y}`)
}

const p = new Log(10, 20);
LogPlus(p);