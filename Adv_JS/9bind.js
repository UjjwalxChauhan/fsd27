function add(a,b,c){
    return a+b+c;
}
const curried = add.bind(null,2);
console.log(curried(3,4));