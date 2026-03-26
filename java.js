/* Console Text and Window Alerts
THIS IS HOW TO MAKE CONSOLE TEXT - console.log(`hello`);
WINDOWED ALERTS - window.alert(`67`);
*/
/* Input for Text Elements
document.getElementById("h1").textContent = `hello`;
document.getElementById("p1").textContent = `hello`;
*/
/* Variables
1. declaration - let x;
2. assignment - x = 100;
3. both together - let x = 123;
4. insert variable in text -
let age = 15;
console.log(`you are ${age} years old.`);
5. display datatypes - console.log(typeof age);
6. string - let x = "letters and numbers but no math";
7. boolean - true or false - let x = true;
*/
/* Example Of Variables
let fullName = "Jack M";
let age = 15;
let student = true;

document.getElementById("p1").textContent = `Your Name Is ${fullName}`;
document.getElementById("p2").textContent = `You Are ${age} Years Old`;
document.getElementById("p3").textContent = `You Are A Student: ${student}`;
*/
/* Math Equation Basic
addition is +
subtraction is -
multiplication is *
division is /
exponential is **
modulus (show remainder) is %
example:
let students = 30;
students = students / 2 - this would give a result of 15
students = students % 2 - this would give a result of 0
*/
/* Augmented Assignment Operators (Math Shortcuts)
let number = 30;
number += 1; - result is 31
number *= 2; - result is 60
this can be applied with ALL math functions (+ - * / % etc.)
number++; - results in number + 1
number--; - number -1
*/
/* Basic User Input Accept
let username;
username = window.prompt(`Enter Username`)
console.log(username);
*/
/* Textbox User Input Accept
also seen in html file
*/
let number;

const btn = document.getElementById("myButton");
document.addEventListener(`keydown`, function(event){
  if (event.key === `Enter`){
    btn.click();
  }
})
document.getElementById("myButton").onclick = function(){
  number = document.getElementById("myText").value;
  console.log(number);
  document.getElementById("myp1").textContent = `You are Thinking of the Number ${number}.`;
}