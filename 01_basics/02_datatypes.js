"use strict"; 
// iska matlab h ki pura JS code ko newer (modern) JS standards ke hisaab se treat karo
// isse errors avoid hote hain jo purane JS me ignore ho jate the

// alert(3+3) 
// ye browser ke liye hota hai (pop-up dikhane ke liye)
// hum Node.js use kar rahe hain, isliye yaha alert() kaam nahi karega

console.log("Hii DataTypes.....");
// console.log --> output ko terminal pe print karne ke liye use hota hai


// ================= PRIMITIVE DATA TYPES =================

let name = "anuj"; 
// String --> text ko represent karta h (single/double/backtick quotes me likhte h)

let age = 18; 
// Number --> integer ya decimal dono store kar sakte ho

let isBoolean = true; 
// Boolean --> sirf do value (true/false)

let state = null; 
// Null --> standalone value, intentional "empty" value

let city; 
// Undefined --> variable declare hua h but value assign nahi hui

let id = Symbol("123");
// Symbol --> unique value create karne ke liye (mostly object keys ke liye use hota h)

let bigNumber = 1234567890123456789012345678901234567890n;
// BigInt --> bahut bade numbers store karne ke liye (normal number ki limit se zyada)


// ================= NON-PRIMITIVE (REFERENCE) DATA TYPES =================

let fruits = ["apple", "mango", "banana"];
// Array --> ek se zyada values ko ek single variable me store karne ke liye (list jaisa)

let person = {
    name: "Anuj",
    age: 18,
    isStudent: true
};
// Object --> key-value pair ke form me data store karte hain

function greet(){
    console.log("Hello Anuj!");
}
// Function --> ek block of code jo reuse kiya ja sakta hai


// ================= TYPEOF CHECKING =================
console.log(typeof(fruits));    
// Output: "object" 
// Reason: JavaScript me Array internally ek special type of object hota hai

console.log(typeof null);       
// Output: "object"
// Ye ek JS ka bug h (ECMAScript ke shuru ke design me mistake thi, ab tak fix nahi kiya gaya)

console.log(typeof undefined);  
// Output: "undefined"
// Ye bilkul sahi hai, kyunki variable declare hua but value assign nahi hui
