var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
        console.log("I am " + this.name);
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " travelled " + distance + " Kilometers");
    };
    Animal.prototype.makeSound = function (sound) {
        console.log(this.name + " will say " + sound);
    };
    return Animal;
}());
// Parent Class Object
// let animalObj = new Animal("Cow");
// animalObj.move(15);
// animalObj.makeSound("Amba Amba....");
var cow = (function (_super) {
    __extends(cow, _super);
    function cow(name) {
        return _super.call(this, name) || this;
    }
    return cow;
}(Animal));
var cowObj = new cow("COW");
cowObj.move(10);
cowObj.makeSound("Amba Amba...");
var cat = (function (_super) {
    __extends(cat, _super);
    function cat(name) {
        return _super.call(this, name) || this;
    }
    return cat;
}(Animal));
var catObj = new cat("CAT");
catObj.move(5);
catObj.makeSound("Meaw Meaw....");
var dog = (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    return dog;
}(Animal));
var dogObj = new dog("DOG");
dogObj.move(8);
dogObj.makeSound("Bhow Bhow....");
var goat = (function (_super) {
    __extends(goat, _super);
    function goat(name) {
        return _super.call(this, name) || this;
    }
    return goat;
}(Animal));
var goatObj = new goat("GOAT");
goatObj.move(3);
goatObj.makeSound("May May....");
