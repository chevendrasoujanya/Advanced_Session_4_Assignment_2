class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
        console.log(`I am ${this.name}`);
    }

    move(distance:number) {
        console.log(`${this.name} travelled ${distance} Kilometers`);
    }

    makeSound(sound: string) {
        console.log(`${this.name} will say ${sound}`);
    }
}
// Parent Class Object
// let animalObj = new Animal("Cow");
// animalObj.move(15);
// animalObj.makeSound("Amba Amba....");

class cow extends Animal {
    constructor(name) {
        super(name);
    }
}
let cowObj = new cow("COW");
cowObj.move(10);
cowObj.makeSound("Amba Amba...");

class cat extends Animal {
    constructor(name) {
        super(name);
    }
}
let catObj = new cat("CAT");
catObj.move(5);
catObj.makeSound("Meaw Meaw....");

class dog extends Animal {
    constructor(name) {
        super(name);
    }
}
let dogObj = new dog("DOG");
dogObj.move(8);
dogObj.makeSound("Bhow Bhow....");

class goat extends Animal {
    constructor(name) {
        super(name);
    }
}
let goatObj = new goat("GOAT");
goatObj.move(3);
goatObj.makeSound("May May....");
