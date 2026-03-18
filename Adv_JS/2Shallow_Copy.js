// shallow copy -> memory refrence same
let user = {
    name : "abc",
    age : 27 , 
    address:{
        city: "Delhi",
        pincode: 110001
    }
};
// spread operator
let copyuser = {...user}; // copyuser is a shallow copy
copyuser.address.city = "mumbai";
console.log(user);
console.log(copyuser);