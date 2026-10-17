//var: not blocked scope  redeclare: yes
//let: blocked scope      redeclare: no
//const: id blocked scope redeclare: no

if (true) {

    var username: string = "kogul";
    let subject: string = "electronics";
    const id:string="123";





    var username: string = "kogul";
    let subject: string = "electronics";
    const id:string="123";

    subject="test";
    id='letter';
}
console.log(username);
//console.log(subject);
//console.log(id);

