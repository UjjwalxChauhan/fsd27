let user = {
    name: "abc",
    age: 27,
    address: {
        city: "Delhi",
        pincode: 110001
    }
};
// using structureclone()
let deepcopy = structuredClone(user);
deepcopy.address.city = "Mumbai";
console.log(user);
console.log(deepcopy);