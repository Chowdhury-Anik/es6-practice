class Student {
    constructor(sId, sName) {
        this.Id = sId;
        this.name = sName;
        this.school = "chila monumia school";
    }
}
const student1 = new Student(12, "shuvo");
const student2 = new Student(13, "mahisa");
console.log(student1.name, student2.name);