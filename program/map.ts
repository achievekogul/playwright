const cars= new Map<string,number>();

cars.set("v4", 1);
cars.set("honda",1);

let  count:number=0;

cars.forEach(value1=>{

count=count+value1;
});

console.log(count>1? "this is average":"this is not average");

