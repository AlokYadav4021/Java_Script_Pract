// 1.Create a Date object
// Create a variable today and store the current date and time using new Date(). Print it.

let date = new Date();
console.log(date);

// 2.Get the current year
// Create a Date object and use getFullYear() to print the current year.

let dat = new Date();
console.log(dat.getFullYear());

// 3.Get the current month
// Use getMonth() to print the current month. Remember that January is 0.

let month = new Date();
console.log(month.getMonth());

// 4.Get the current day of the month
// Use getDate() to print today's date.

let day = new Date();
console.log(day.getDate());

// 5.Get the current day of the week
// Use getDay() to print the current day of the week. Also display a message such as "Today is Monday".

let din = new Date();
let x = din.toString(din.getDay());
console.log(`Today is ${x}`);

// 6.Get the current hour
// Use getHours() to print the current hour.

let ad = new Date();

console.log(ad.getHours());

// 7.Get minutes and seconds
// Use getMinutes() and getSeconds() to print the current minutes and seconds.

let sec = new Date();

console.log(sec.getMinutes(), sec.getUTCSeconds());

// 8.Create a specific date
// Create a Date object for 15 August 2026 and print it.

let aug = new Date(2026, 7, 15);
console.log(aug);

// 9.Create a date with time
// Create a Date object for 25 December 2026, 10:30:45 AM and print it.

let dec = new Date(2026, 11, 25, 10, 30, 45);
console.log(dec);

// 10.Print date parts separately
// Create a Date object and print its:

// Year
// Month
// Date
// Day
// Hour
// Minutes
// Seconds

let sapd = new Date();
console.log(sapd.getFullYear());
console.log(sapd.getMonth());
console.log(sapd.getDate());
console.log(sapd.getDay());
console.log(sapd.getHours());
console.log(sapd.getMinutes());
console.log(sapd.getSeconds());

// 11.Change the year
// Create a Date object for 2026 and change its year to 2030 using setFullYear().

let da = new Date(2026, 10, 21);

da.setFullYear(2030);
console.log(da);

// 12.Change the month
// Create a Date object and change its month to December using setMonth().

let smo = new Date(2020, 1, 25);

smo.setMonth(3);
console.log(smo);

// 13.Change the date
// Create a Date object and change its day of the month to 25 using setDate().

let sda = new Date(2023, 11, 20);
sda.setDate(25);
console.log(sda);

// 14.Add 7 days to a date
// Create a Date object for 10 September 2026. Add 7 days to it using setDate() and print the result.

let addd = new Date(2026, 8, 10);

addd.setDate(addd.getDate() + 7);
console.log(addd);

// 15.Subtract 10 days from a date
// Create a Date object for 20 September 2026. Subtract 10 days and print the result.

let subb = new Date(2026, 8, 20);
subb.setDate(subb.getDate() - 10);
console.log(subb);

// 16.Compare two dates
// Create:

// let date1 = new Date("2026-09-15");
// let date2 = new Date("2026-09-25");

// Check which date is earlier.

let date1 = new Date("2026-09-15");
let date2 = new Date("2026-09-25");

if (date1 > date2) {
  console.log("Date 1 is Bigger");
} else if (date1 < date2) {
  console.log("Date 2 is Bigger");
} else {
  console.log("Both Are Equal");
}

// 17.Calculate the difference between two dates
// Given:

// let date1 = new Date("2026-09-01");
// let date2 = new Date("2026-09-28");

let dat1 = new Date("2026-09-01");
let dat2 = new Date("2026-09-28");

let diff = dat2.getTime() - dat1.getTime() 

let days = diff /(1000 * 60 * 60 * 24)
console.log(days)


18.