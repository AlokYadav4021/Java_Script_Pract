// 1.Create a Date object
// Create a variable today and store the current date and time using new Date(). Print it.

let date = new Date()
console.log(date)


// 2.Get the current year
// Create a Date object and use getFullYear() to print the current year.

let dat = new Date()
console.log(dat.getFullYear())



// 3.Get the current month
// Use getMonth() to print the current month. Remember that January is 0.


let month = new Date();
console.log(month.getMonth())



// 4.Get the current day of the month
// Use getDate() to print today's date.

let day = new Date()
console.log(day.getDate())


// 5.Get the current day of the week
// Use getDay() to print the current day of the week. Also display a message such as "Today is Monday".


let din = new Date();
let x = din.toString(din.getDay())
console.log(`Today is ${x}`)


// 6.Get the current hour
// Use getHours() to print the current hour.

let ad = new Date()

console.log(ad.getHours())


// 7.Get minutes and seconds
// Use getMinutes() and getSeconds() to print the current minutes and seconds.


let sec = new Date()

console.log(sec.getMinutes(), sec.getUTCSeconds())


// 8.Create a specific date
// Create a Date object for 15 August 2026 and print it.


let aug = new Date(2026,7,15)
console.log(aug)


// 9.Create a date with time
// Create a Date object for 25 December 2026, 10:30:45 AM and print it.


let dec = new Date(2026,11,25,10,30,45)
console.log(dec)


// 10.Print date parts separately
// Create a Date object and print its:

// Year
// Month
// Date
// Day
// Hour
// Minutes
// Seconds

let sapd = new Date()
console.log(sapd.getFullYear())
console.log(sapd.getMonth())
console.log(sapd.getDate())
console.log(sapd.getDay())
console.log(sapd.getHours())
console.log(sapd.getMinutes())
console.log(sapd.getSeconds())



