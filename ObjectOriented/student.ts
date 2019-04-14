class Student{
	name : string;
	roll : number;
	constructor(name,roll){
		this.name = name;
		this.roll = roll;
	}
}
let s1 = new Student('India',100);
let s2 = new Student('Pune',500);
console.log(s1.name);
console.log(s1.roll);
console.log(s2.name);
console.log(s2.roll);