// Q1. Square Every Number
// Difficulty: Easy
// Given the following array:
// let numbers = [2, 4, 6, 8, 10];


// Use map() to create a new array containing the square of every number.

let numbers = [2, 4, 6, 8, 10];

let sqr = numbers.map((sqrt)=>{
    return sqrt*sqrt
})

console.log(sqr)


// Q2. 
// Difficulty: Intermediate
// let prices = [500, 1000, 1500, 2000, 2500];


// Use map() to apply a 20% discount to every price.

let prices = [500, 1000, 1500, 2000, 2500];


let dis = prices.map((num)=>{
    return num-((20/100)*num)
})

console.log(dis)


// q3.
// Convert Names to Uppercase
// Difficulty: Intermediate
// let names = ["alok", "rahul", "priya", "neha", "amit"];


// Use map() to convert every name to uppercase.


let names = ["alok", "rahul", "priya", "neha", "amit"];

let upr = names.map((na)=>{

    return na.toUpperCase()
    // return upar
    // return na

})

console.log(upr)


// Q4. Extract Information from Objects
// Difficulty: Advanced
// let students = [
//     { name: "Alok", marks: 85 },
//     { name: "Rahul", marks: 72 },
//     { name: "Priya", marks: 93 },
//     { name: "Neha", marks: 68 }
// ];


// Use map() to create a new array containing each student's name and marks increased by 10.


let students = [
    { name: "Alok", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 93 },
    { name: "Neha", marks: 68 }
];


let naaa = students.map((objr)=>{

    // let full =`name: ${objr.name} , marks ${objr.marks} `
    // return full

    return {
      name: objr.name,
      marks: objr.marks + 10,
    };
})

console.log(naaa)


