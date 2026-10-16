// Q11. Calculate the Sum
// Difficulty: Easy
// let numbers = [10, 20, 30, 40, 50];
// Use reduce() to calculate the sum of all numbers.


let numbers = [10, 20, 30, 40, 50];

let add = numbers.reduce((a , b)=>{
    return a + b
})

console.log(add)



// Find the Total Shopping Bill
// Difficulty: Intermediate
// let prices = [250, 499, 1200, 350, 799];
// Use reduce() to calculate the total cost of all products.

let prices = [250, 499, 1200, 350, 799];


let totalb = prices.reduce((pre,next)=>{
    return pre + next
})

console.log(totalb)




// Count the Number of Adults
// Difficulty: Intermediate
// let ages = [12, 18, 25, 16, 32, 14, 21, 17];


// Use reduce() to count how many people are 18 or older.

let ages = [12, 18, 25, 16, 32, 14, 21, 17];



let adlt = ages.reduce((count,age)=>{
    if(age >=18){
        return count + 1
    }else{
        return count
    } 
},0)

console.log(adlt)


// Q14. Find the Highest Number
// Difficulty: Advanced
// let numbers = [45, 12, 89, 34, 100, 67, 23];


// Use reduce() to find the largest number in the array.

let numbrs = [45, 12, 89, 34, 100, 67, 23];


let mx = numbrs.reduce((max,num)=>{
    if(num > max){
        return num
    }else{
        return max
    }
},numbrs[0])

console.log(mx)




// Q15. Calculate Total Inventory Value
// Difficulty: Advanced
// let products = [
//     { name: "Laptop", price: 50000, quantity: 2 },
//     { name: "Mouse", price: 500, quantity: 5 },
//     { name: "Keyboard", price: 1500, quantity: 3 },
//     { name: "Monitor", price: 12000, quantity: 2 }
// ];


// Use reduce() to calculate the total inventory value using this formula:


let products = [
    { name: "Laptop", price: 50000, quantity: 2 },
    { name: "Mouse", price: 500, quantity: 5 },
    { name: "Keyboard", price: 1500, quantity: 3 },
    { name: "Monitor", price: 12000, quantity: 2 }
];

let total = products.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
}, 0);

console.log(total); // 129500