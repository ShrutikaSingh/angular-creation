class Student{
	name : string;
	roll : number;
	setdata():void{
		this.name = "India";
		this.roll = 1000;
	}
}
let s1 = new Student();
let s2 = new Student();
s1.setdata();
s2.setdata();
console.log(s1.name);
console.log(s1.roll);
console.log(s2.name);
console.log(s2.roll);