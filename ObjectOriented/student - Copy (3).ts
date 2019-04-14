class Student{
	name : string;
	roll : number;
	setdata(name,roll):void{
		this.name = name;
		this.roll = roll;
	}
}
let s1 = new Student();
let s2 = new Student();
s1.setdata('India',100);
s2.setdata('Pune',200);
console.log(s1.name);
console.log(s1.roll);
console.log(s2.name);
console.log(s2.roll);