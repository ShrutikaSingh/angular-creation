/*
function add(){
	let a = 100,b = 200;
	let c = a + b;
	console.log("Result : "+c);
}
add();
*/
/*
function add(a,b):void{
	let c = a + b;
	console.log("Result : "+c);
}
add(1000,2000);
*/
/*
function add(a,b):number{
	let c = a + b;
	return c;
}
let r = add(100,300);
console.log("Result : "+r);
*/
//Anonymous Function
/*
let x = function (){
	console.log("Welcome to Anonymous Function");
}
x();
*/
/*
let x = function (a,b){
	let c = a + b;
	console.log("Result : "+c);
}
x(100,500);
*/
/*
let x = function (a,b):number{
	let c = a + b;
	return c;
}
console.log("Result : "+x(1000,500));
*/
/*
let x = ()=>{
	console.log("Welcome to Lemda Function");
}
x();
*/
/*
let x = (a,b)=>{
	let c = a + b;
	console.log("Result : "+c);
}
x(100,500);
*/
/*
let x = (a,b):number=>{
	let c = a + b;
	return c;
}
console.log("Result : "+x(1000,500));
*/
/*
function add(a:number[]){
	for(let i in a){
		console.log(a[i]);
	}
}
add([10,50,90]);
*/
function add(a,b,c){
	if(c==undefined){
		console.log(a+b);
	}
	else{
		console.log(a+b+c);
	}
}
add(100,200,300);