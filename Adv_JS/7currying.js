// currying 
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         };
//     };
// }
// console.log(add(2)(3)(5));

// arrow currying 

const add = a => b => c => a + b + c;

console.log(add(2)(3)(5));