//let

// let age=24;
// age=26;
// console.log(age);

function test1(){
 var x=10;

 if(true){
    var x=20;
    console.log("test1"+" "+x);
 }
console.log("test1"+" "+ x);

}

test1()


function test2(){

let x=10;

if(true){

   let x=20;
   console.log("test2"+" "+x); 
}
console.log("test2"+" "+x);

}
test2();

var city = "Chennai";
var city = "Karur"; // Error
console.log(city);

let city1: string = "Chennai";
let num: number=10;
let isActive:boolean=true;
let numbers: number[] =[1,2,34,5];
console.log(numbers);
let employee:[number, string]=[101,'Test'];
// enum Browser{
// chrome, 
// Browser, 
// Edge

// }

let value: any = "Kogul"; 
 
value = 100; 
//value = true; 
 
console.log(value); 

 let name1:string="kogul";

console.log(`welcome ${name1}`);

 let name123:string="test";
 console.log(`Welcome to test framework ${name123}`);

  let numbers1:number[]=[1,2,3,4,5,6];

   let numbers2:number[]=[12,3,4,5,6];

    let numbers3:number[] =[1,23,4,5,76,7];

    for(let i=0;i<numbers1.length;i++){  
      console.log(numbers1[i]);
    }

let employee1:[number, string] =[101, "Test"];

// enum statusCode{
//  success=200,
//  Notfound=404,
//  chromium='chrome'
// }

// console.log(statusCode.success);
// console.log(statusCode.chromium)

let staff={
id:101,
name:'kogul',
salary:400
};

console.log(staff);

let browser: string="chrome";


switch(browser){
  case "chrome":
      console.log("chrome browser");
      break;
      case "firefox":
      console.log("firefox browser");
      break;
default:
      console.log("default browser");
}

let names =["kogul", "test", "test1", "test2"];

for(let name of names){
  console.log(name);
}

let employee11 = {
    id: 101,
    name: "Kogul",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key);
}

for (let key in employee11) {
    console.log(`${key} : ${employee11[key as keyof typeof employee11]}`);
}


function getName(){


}
function greet(name:String){

}

function add1(one:number, two:number){
   return one+two;
}

function employeeDet(name:string, id:number, salary:number): void{


}

console.log(employeeDet("kogul", 101, 400));


