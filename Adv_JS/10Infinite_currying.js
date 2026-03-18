function add(a){
    function sum(b){
        if(b !== undefined) return sum(a + b);
        return a;
    }
    return sum;
}

console.log(add(1)(2)(3)(4)()); 