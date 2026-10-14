function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    return `${this.name} makes a sound`;
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
    return `${this.name} barks`;
};

const d = new Dog("Rex");
console.log(d.speak()); // "Rex barks"
console.log(d instanceof Animal); // true