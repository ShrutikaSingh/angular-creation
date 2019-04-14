var Student = /** @class */ (function () {
    function Student(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    return Student;
}());
var s1 = new Student('India', 100);
var s2 = new Student('Pune', 500);
console.log(s1.name);
console.log(s1.roll);
console.log(s2.name);
console.log(s2.roll);
