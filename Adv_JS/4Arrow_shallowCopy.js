// nested object hai to data change hoga 
// warna change nahi hoga
let arr=[1,2,3];

let arrcopy={...arr};
arrcopy[0]=10;

console.log(arr);
console.log(arrcopy);//its output is different from shallow copy because there is no nested object is used
                     //i.e no changes in nested object refects back to the original object