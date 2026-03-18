let user={
    name:"abc",
    age:27,
    address:{
        city:"Delhi"
    }
};
//using JSON for deepcopy(i.e fully independent)
let deepcopy=JSON.parse(JSON.stringify(user));
deepcopy.address.city="Mumbai";

console.log(user);
console.log(deepcopy);

//structuredClone()
let deep=structuredClone(user);
deep.address.city="Lucknow";
console.log(user);
console.log(deep);