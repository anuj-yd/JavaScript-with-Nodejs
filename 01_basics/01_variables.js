const accountId = 271201; 
// const ka use kiya hai --> iska value change nahi ho sakta (read-only hota hai)

let accountEmail = "anujyadav992241@gmail.com";
// let ka use kiya hai --> isme value update ho sakti hai

var accountPass = "12345";
// var ka use avoid karna chahiye
// kyunki block scope me dikkat deta hai (modern JS me let prefer karo)

accountCity = "Balrampur";
// yaha variable declare nahi kiya, direct assign kar diya 
// (ye by default global variable ban jaata hai) ❌ best practice nahi hai

// accountId = 2 not allowed
// const variable ko update karna allowed nahi hai, warna error aayega

accountEmail="hc@hc.com";
// email ko update kiya (let hone ki wajah se allowed hai)

accountPass ="212121";
// password update ho gaya (var hone ki wajah se bhi allowed hai)

accountCity = "Punjab";
// city bhi update ho gayi

console.log(accountId);
// sirf accountId ko print karega

console.table([accountId,accountEmail,accountPass,accountCity]);
// console.table --> saare values ko ek table format me nicely print karega

// difference between let and var

// var → function-scoped hota hai (sirf function ke andar hi valid hota hai). 
// Agar function ke bahar declare kiya to globally accessible ho jata hai.

// let → block-scoped hota hai (sirf { } ke andar hi valid hota hai jaha declare hua hai).

let accountState;
// sirf declare krke chhodne se javasceript isko undefined maanti h
