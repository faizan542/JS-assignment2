// CHANGING CASE
//Q:1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName =  firstName + " " + lastName;
// alert("Hello " + fullName.toUpperCase(fullName))

//Q:2
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName =  firstName + " " + lastName;
// alert("Hello " + fullName)


// Strings: measuring length and extracting parts
// Q:1
// var phone = prompt("What's your favourite Mobile Phone model?");
// document.write("My favourite phone is: " + phone +"<br>Length of String: " + phone.length + "<br><br>" );

// Q:2
// var h = "Hello World"
// var lastIndex = h.charAt(10);
// document.write( lastIndex)

//Strings: finding segments
// Q:1
//  var n = "Pakistani";
//  var indexOfN = n.indexOf("n");
//  document.write("String: "+n + "<br>Index of 'n': "+ indexOfN + "<br><br>");

// Q:2
//  var userName = prompt("Enter your name");
//  for(i=0; i < userName.length; i++){
//  if(userName[i] === "@" ||userName[i] ===  "." ||userName[i] ===  "," ||userName[i] ===  "!" ||userName[i] === "#" ||userName[i] === "$" ||userName[i] === "%" ||userName[i] === "^" ||userName[i] === "&" ||userName[i] === "*" ||userName[i] === "(" ||userName[i] === ")" ||userName[i] === "=" ||userName[i] === "+" ||userName[i] === ";" ||userName[i] === ":" ||userName[i] === "," ||userName[i] === "/"  ){
//         alert("Please enter a valid username\n\n Prevent this page from creating additional dilogs.")
//     } 
//  }

//Strings: finding a character at a location
// Q:1
//  var n = "Pakistani";
//  var index3 = n.charAt(3);
// document.write("String: " + n + "<br>Character at index 3: " + index3 + "<br><br>");

// Strings: replacing characters
// Q:1
// var city = "Hyderabad";
// var city1 = city.replace("Hyder","Islam");
// document.write("City: " + city + "<br>After replacement: " + city1 + "<br><br>");

// Q:2
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g,"&");
// document.write(message + "<br>" + message1 );

// Rounding numbers
// Q:1
// var a = prompt("Enter a positive integer");
// var b = Number(a);
// var c = Math.round(a);
// var d = Math.floor(a);
// var e = Math.ceil(a);
// document.write("number: " + b + "<br>round off value: " + c + "<br>floor value: " + d + "<br>ceil value: " + e);

// Q:2
// var a = prompt("Enter a negative floating point number");
// var b = Number(a);
// var c = Math.round(a);
// var d = Math.floor(a);
// var e = Math.ceil(a);
// document.write("number: " + b + "<br>round off value: " + c + "<br>floor value: " + d + "<br>ceil value: " + e );

// Generating random numbers
// Q:1
// var a = prompt("Enter any number")
// var b = Math.random(a)
// document.write(b)

//Q:2
// var value = Math.floor( Math.random() * 2 ) +1;
// document.write("Random dice Value : " + value);
// if(value === 2){
//     document.write("<br>Random coin Value : Heads")
// } else{
//     document.write("<br>Random coin Value : Tails")
// }

// Q:3
// var sceret = Math.floor(Math.random() * 10) +1;
// var guess = +prompt('Enter a Number Between 1 to 10 ');
// if(sceret === guess){
//     alert('You Win!');
// } else{
//     alert('Try Again!');
// }

// Converting strings to integers and decimals
// Q:1
// var input = prompt("Enter your weight in kilograms");
// var p = parseInt(input);
// document.write("The weight of user is " + input  + " kilograms");

// Converting strings to numbers, numbers to strings
// Q:1
// var num = Number("472");
// document.write("Value: " + num + "<br>Type: string<br>"+"Value: " + num + "<br>Type: number<br><br>");

// Controlling the length of decimals
// Q:1
// var percentage = 30 / 45 * 100
// var b = percentage.toFixed(2)
// document.write(b)