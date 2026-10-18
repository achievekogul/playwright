let name1234: string = "test";
let concat: string = "";

for (let i = name1234.length; i >= 0; i--) {

    concat = concat + name1234.charAt(i);

}
//console.log(concat);

for (const num of name1234) {
  //  console.log(num);

}

//duplicate characters

let values: String = "swiss";

for (let i = 0; i < values.length; i++) {

    let duplicate: boolean = false;
    let count: number = 0;

    for (let j = 0; j < values.length; j++) {
        if (values.charAt(i) == values.charAt(j)) {
            count++;
        }

    }
    if (count==1) {
        for (let k = 0; k < i; k++) {
            if (values.charAt(i) == values.charAt(k)) {
                duplicate = true;
                break;
            }
        }
    }

    if(!duplicate && count==1){
        console.log(values.charAt(i));
        break;
    }
}