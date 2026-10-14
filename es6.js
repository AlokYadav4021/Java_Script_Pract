// Spread Operartor (...)


// Spread Operartor with arrey

let arr1 = [1,2,3,4,5,45]
let arr2 = ["a","b","c","d"]

let arr3 = [...arr1,...arr2,55,66,]
console.log(arr3)


// Spread Operartor with object

let obj = {
    id:1,
    class:"MERN",
    time:3
}

let obj1 = {
    id:2,
    class:"Fullstack with Java",
    time:3
}

let obj2 = {
    ...obj1,
    Student:"Yes"
}

console.log(obj2)



// Rest Operator



let fun = (...add)=>{console.log(add)}
fun(1,2,3,5)


function sum(...num){
    console.log(num)
}
sum(1,2,3,4,5,6)


function sam(...arg){
    let count = 0;
    for (let i = 0; i < arg.length;i++){
        count += arg[i]
    }
    console.log(count)
}

sam(1,2,3,4,5,6,7,8,9)