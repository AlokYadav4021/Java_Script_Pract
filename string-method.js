// 1.Find the length of a string
// Create let text = "JavaScript"; and print its length.

// let text = "JavaScript";

// console.log(text.length)

// 2.Convert to uppercase
// Convert "hello world" to uppercase using a string method.


// let str = "Hello World"

// console.log(str.toUpperCase())



// 3.Convert to lowercase
// Convert "JAVASCRIPT IS FUN" to lowercase.


// let lower = "JAVASCRIPT IS FUN";
// console.log(lower.toLowerCase())


// 4.Find a character
// Create let text = "JavaScript"; and use a string method to get the character at index


// let text = "JavaScript";

// console.log(text.charAt(4))


// 5.Find the position of a word
// Find the index of "world" in "Hello world".

// let text = "Hello world";
// console.log(text.indexOf("world"))

// 6.Check if a string contains a word
// Check whether "JavaScript is easy" contains "easy".


// let text = "JavaScript is easy";
// console.log(text.includes("easy"))


// 7.Check the beginning of a string
// Check whether "Hello JavaScript" starts with "Hello"

// let txt = "Hello JavaScript";
// console.log(txt.startsWith("Hello"))

// 8.Check the ending of a string
// Check whether "myfile.jpg" ends with ".jpg".

// let txt = "myfile.jpg";
// console.log(txt.endsWith("jpg"))


// 9.Extract part of a string
// From "JavaScript", extract "Script".

// let str = "JavaScript";
// console.log(str.slice(4))



// 10.Extract characters using slice
// Create let text = "Frontend Developer"; and extract "Frontend".


// let text = "Frontend Developer";

// console.log(text.slice(0,9))

// 11.Replace a word
// Change "I love Java" to "I love JavaScript" using a string method.

// let str = "I love Java"; 
// console.log(str.replace("Java", "JavaScript"))

// 12.Remove extra spaces
// Create let text = " Hello World "; and remove the spaces from both ends.

// let text = " Hello World ";

// console.log(text);

// console.log(text.trim())


// 13.Repeat a string
// Create let text = "Hi "; and repeat it 5 times using a string method.

// let text = "Hi ";
// console.log(text.repeat(5))

// 14.Split a sentence
// Convert "HTML CSS JavaScript React" into an array containing each technology separately.

// let lang = "HTML CSS JavaScript React";

// console.log(lang.split(" "))

// 15.Join array elements
// Create:

// let languages = ["HTML", "CSS", "JavaScript"];

// Convert it into:
// "HTML, CSS, JavaScript"

// let languages = ["HTML", "CSS", "JavaScript"];
// console.log(languages.toString())

// 16.Count a specific character
// Create:

// let text = "javascript";

// Count how many times the letter "a" appears.

// let text = "javascript";
// count = 0;

// for (let i = 0 ; i < text.length ; i++){
//     if (text[i] === "a"){
//         count++
//     }
// }
// console.log(count)

// 17.Create:

// let password = "JavaScript123";

// Check whether the password contains "123" and has at least 8 characters.

//  let password = "JavaScript123";

//  console.log(password.includes(123))

// 18.Extract the username from an email
// Create:

// let email = "alok123@gmail.com";
// Extract only "alok123" using string methods.

// let email = "alok123@gmail.com";

// let username=(email.split("@") [0])
// console.log(username)

// 19.Reverse a string
// Create:

// let text = "JavaScript";

// Reverse the string to produce:
// "tpircSavaJ"

// let text = "JavaScript";

// let opt = text.split("").reverse().join("")
// console.log(opt)


// 20.Count vowels in a string
// Create:

// let text = "JavaScript is powerful";

// Count how many vowels (a, e, i, o, u) are present in the string.

// Practice rule: Try solving these without looking up the solution. For the first 15, focus on methods such as length, toUpperCase(), toLowerCase(), charAt(), indexOf(), includes(), startsWith(), endsWith(), slice(), replace(), trim(), repeat(), split(), and join().

//  let text = "JavaScript is powerful";

//  count=0 ;

//  let a = text.toLowerCase();

//  for (let i = 0 ; i < text.length ; i++){
//     if("aeiou".includes (text.charAt(i))){
//         count++
//     }
//  }

//  console.log(count)