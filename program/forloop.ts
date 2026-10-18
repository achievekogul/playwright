

for (let i = 0; i < 5; i++) {
    console.log(i);
}

function add(tax: number, goods: number): number {
    return tax + goods;
}

console.log(add(10, 10));

function printStrings(chennai: string, location: string): string {
    return `this is ${chennai} and search for the ${location}`
}
console.log(printStrings("chennai", "India"));


function nothingreturns(messsage:string): void{
 console.log(`[Alert]: ${messsage}`);
}
console.log(nothingreturns("this is"));

function printvalur(name: string, location?:string):string{
    if(location){
return `This is ${name} and ${location}`
    }
    return 'not value included';
}
console.log(printvalur("kogul"));

let total=0;
function multi1(...price:number[]):number{

total=total+price[0];

return total;
}

 const tet =(test:string):string =>{
    return "null";
}


