let a = 10
let b = "string"
var c = 100
var d = "ujjwal"
const bool = true
console.log(typeof a)

//array
let arr=[10,20,30,40];
console.log(arr[0]);
arr.push(50);
arr.pop();
console.log(arr);

//object
let students={
    name:"Ujjwal",
    age:27
}

//function
function add(p,q){
    return p+q;
}
console.log(add(5,7));

//arrow function
const multiply=(p,q) =>p*q;
console.log("arrow function",multiply(5,10));

//date
let today=new Date();
console.log(today);

//math
console.log(Math.sqrt(25));
console.log(Math.random());

//string
txt="hello";
console.log(txt.length);

// type conversion
let strnum = "123";
let convert = Number(strnum);
console.log(convert+10);