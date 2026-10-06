// 1. Change Text
// Create an HTML <h1> with the text "Hello World".
// Use JavaScript to change it to:
// Welcome to JavaScript
// Use getElementById()

let changee = document.getElementById("change");
changee.innerText = "Welcome to JavaScript";

// 2.Change Paragraph
// Create:
// <p id="message">Hello</p>
// Use JavaScript to change the paragraph text to:
// I am learning DOM.

let message = document.getElementById("message");
message.innerText = "I am learning DOM.";

// 3.Change Background Color
// Create a <div> with an ID.
// When JavaScript runs, change its background color using:
// element.style.backgroundColor

let option = document.getElementById("third");
option.style.backgroundColor = "cyan";

// 4. Change Text Color
// Create an <h2>.
// Use JavaScript to change its text color.

let sect = document.getElementsByTagName("h2");
sect[0].style.color = "red";

// 5.Create a paragraph:
// <p id="text">JavaScript DOM</p>
// Use JavaScript to make its font size 30px

let size = document.getElementById("text");
size.style.fontSize = "30px";

// 6.Create:
// <input id="name" type="text">
// Get the value entered by the user and print it in the console.

let ip = document.getElementById("name");

function change() {
  console.log(ip.value);
}

// 7. Display Input Value
// Create an input and a button.
// When the button is clicked, display the entered name inside a <p> element.

function cangle() {
  let parasub = document.getElementById("para");
  let addpr = document.getElementById("addp")

  addpr.innerText= parasub.value
}
