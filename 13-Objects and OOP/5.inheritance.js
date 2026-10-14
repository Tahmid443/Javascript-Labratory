class Animal {
    constructor(name) { this.name = name; }
    speak() { return `${this.name} makes a sound`; }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        return `${super.speak()} - specifically, barks`;
    }
}

const d = new Dog("Rex", "Lab");
console.log(d.speak());
console.log(d instanceof Animal); // true