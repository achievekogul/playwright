//var: not blocked scope  redeclare: yes
//let: blocked scope      redeclare: no
//const: id blocked scope redeclare: no

if (true) {

    var username: string = "kogul";
    // let subject: string = "electronics";
    //const id: string = "123";

    var username: string = "kogul";
    let subject: string = "electronics";
    //const id: string = "123";

    username = "gear";
    subject = "test";
    //  id = 'letter';
}

console.log(username);
//console.log(subject);
//console.log(id);

//declared but not assigned
let un: string | undefined;
//intentional way of assigning of emptiness
let n: string | null = null;

console.log(un);
console.log(n);

let statuscode:number=200;
let vali:boolean=true;

if(statuscode&&vali){
    console.log("valid cart status....")
}
let cartitemcount:number=0;
let cartstatus:string = cartitemcount > 0?"Activecart":"emptycart";