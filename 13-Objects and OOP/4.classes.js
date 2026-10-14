class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, I'm ${this.name}`;
    }

    static create(name) {
        return new Person(name, 0);
    }

    get info() {
        return `${this.name} (${this.age})`;
    }

    set info(value) {
        [this.name, this.age] = value.split(" ");
    }
}

const p = new Person("Alice", 25);
console.log(p.greet());
console.log(Person.create("Bob").name);
console.log(p.info);
p.info = "Carol 30";
console.log(p.name, p.age);