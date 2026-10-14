function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hi, I'm ${this.name}`;
};

const alice = new Person("Alice", 25);
console.log(alice.greet());
console.log(alice instanceof Person); // true