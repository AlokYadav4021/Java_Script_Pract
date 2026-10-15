// Q6. Find Numbers Greater Than 50
// Difficulty: Easy
// let numbers = [12, 65, 34, 89, 45, 100, 23, 76];
// Use filter() to select numbers greater than 50.


let numbers = [12, 65, 34, 89, 45, 100, 23, 76];

let grt = numbers.filter((numb)=>{
    return numb > 50
})

console.log(grt)



// Q7. Find Odd Numbers
// Difficulty: Intermediate
// let numbers = [11, 24, 37, 42, 55, 68, 73, 80];
// Use filter() to select all odd numbers.



let num = [11, 24, 37, 42, 55, 68, 73, 80];


let odd = num.filter((odn)=>{
    return odn % 2 != 0
})

console.log(odd)


// Q8. Find Students Who Passed
// Difficulty: Intermediate
// let students = [
//     { name: "Aman", marks: 35 },
//     { name: "Priya", marks: 78 },
//     { name: "Rahul", marks: 28 },
//     { name: "Neha", marks: 65 },
//     { name: "Karan", marks: 40 }
// ];
// Use filter() to select students who scored at least 40 marks.



let students = [
  { name: "Aman", marks: 35 },
  { name: "Priya", marks: 78 },
  { name: "Rahul", marks: 28 },
  { name: "Neha", marks: 65 },
  { name: "Karan", marks: 40 },
];


let std = students.filter((stdu)=>{
    return stdu.marks >= 40
})

console.log(std)




// Q9. Find Affordable Products
// Difficulty: Advanced
// let products = [
//     { name: "Laptop", price: 55000 },
//     { name: "Mouse", price: 600 },
//     { name: "Keyboard", price: 1800 },
//     { name: "Headphones", price: 2500 },
//     { name: "USB Cable", price: 300 }
// ];
// Use filter() to select products that cost less than ₹2,000.


let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 600 },
    { name: "Keyboard", price: 1800 },
    { name: "Headphones", price: 2500 },
    { name: "USB Cable", price: 300 }
];

let prd = products.filter((prdo)=>{
    return prdo.price <= 2000
})

console.log(prd)




// Q10. Filter Eligible Employees
// Difficulty: Advanced
// let employees = [
//     { name: "Alok", age: 22, salary: 25000 },
//     { name: "Rahul", age: 17, salary: 40000 },
//     { name: "Priya", age: 25, salary: 45000 },
//     { name: "Neha", age: 30, salary: 28000 },
//     { name: "Amit", age: 19, salary: 35000 }
// ];
// Use filter() to select employees who satisfy both conditions:
// - Age is at least 18.
// - Salary is greater than ₹30,000.



let employees = [
    { name: "Alok", age: 22, salary: 25000 },
    { name: "Rahul", age: 17, salary: 40000 },
    { name: "Priya", age: 25, salary: 45000 },
    { name: "Neha", age: 30, salary: 28000 },
    { name: "Amit", age: 19, salary: 35000 }
];


let empl = employees.filter((emp)=>{
    if(emp.age >= 18 && emp.salary >= 30000){
        console.log(emp)
    }
    return 
})

