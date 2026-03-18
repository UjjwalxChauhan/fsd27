let user = {
    name: "abc",
    age: 27,
    address: {
        city: "Delhi",
        pincode: 110001
    }
};

// shallow copy using Object assign
let copyuser = Object.assign({}, user);

copyuser.address.city = "Mumbai";

console.log(user);
console.log(copyuser);