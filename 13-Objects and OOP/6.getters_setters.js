class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }
    get celsius() { return this._celsius; }
    set celsius(v) {
        if (v < -273.15) throw new Error("Below absolute zero");
        this._celsius = v;
    }
    get fahrenheit() { return this._celsius * 9 / 5 + 32; }
}

const t = new Temperature(25);
console.log(t.fahrenheit); // 77
t.celsius = 30;
console.log(t.fahrenheit); // 86

// Object literal
const obj = {
    _x: 0,
    get x() { return this._x; },
    set x(v) { this._x = v; }
};
obj.x = 5;
console.log(obj.x); // 5