class Parent {
    constructor() {
        this.fatherName = ("Shuvash");
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const baby1 = new Child("Anik");
const baby2 = new Child('Arun');
console.log(baby1.getFullName());
console.log(baby2.getFullName());