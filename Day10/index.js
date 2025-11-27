// function declaration
// function declaration is a way of defining a function using the function keyword followed by the function name and parentheses ().
// function declaration can be hoisted, meaning they can be called before they are defined in the code.
// function declaration syntax
// in function declaration you can call before function declare
console.log(greet("Surafel")); // Output: Hello, Alice!
console.log(greet("John"));  // Output: Hello, John!


function greet(name) {
    return "Hello, " + name + "!";
}





// function expression
// function expression is a way of defining a function using a variable to store the function.
// function expression cannot be hoisted, meaning they cannot be called before they are defined in the code.
// function expression syntax
// in function expression you cannot call before function declare
// console.log(greet("Surafel")); // Output: Error: greet is not defined


let greets =function(name){
    return `hello  ${name} !`
}
console.log(greets("Surafel")); // Output: hello  Surafel !
console.log(greets("John")); // Output: hello  John !


// can not call before function declare in function expression
// console.log(add(12,10)); //the error happen 
// const add = function(num1,num2){
//     return num1+ num2
// }


//  arrow function 
//  arrow function is a shorter syntax for writing function expressions.
// arrow function does not have its own this keyword, it inherits this from the surrounding code.
//  arrow function syntax
const info=(name,age) =>{
     return  `my name ${name}  and i'm ${age} years old`
}
console.log(info("Surafel",27));

// if the function body has only one expression, you can omit the curly braces {} and the return keyword.
const multiply = (a, b) => a * b;
console.log(multiply(12,12))  ; // Output: 144


// if the function has only one parameter, you can omit the parentheses () around the parameter.
const name=name => `hello  ${name} !`
console.log(name("Surafel")); // Output: hello  Surafel !

// if the function has no parameters, you must use empty 
const greetWorld = () => "Hello, World!";
console.log(greetWorld()); // Output: Hello, World!

// arrow function does not have its own this keyword
const person = {
    name: "Surafel Mengist",
    lastName:"Berehun",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}  ${this.lastName}`);
        }, 1000);
        
    }
};

person.greet(); // Output after 1 second: Hello, my name is Surafel
console.log(person.greet());

// in the example below, the this keyword inside the setTimeout function refers to the global object (window in browsers) instead of the person object.  
const obj1={
    name:"Surafel",
    age:25,
    greet:()=>{
       console.log(`hello my name is ${this.name} and i'm ${this.age} years old`)
}
}
console.log(obj1.greet()); // Output: hello my name is undefined and i'm undefined years old


// 4 IIFE (Immediately Invoked Function Expression)
// IIFE is a function that is defined and executed immediately after its creation.
// IIFE syntax
(function() {})(); // traditional IIFE
(() => {})(); // arrow function IIFE
// IIFE is often used to create a new scope and avoid polluting the global namespace.
(function(name){
    console.log(`Hello, ${name}!`);
})("Surafel"); // Output: Hello, Surafel!

// arrow function IIFE
((name) => console.log(`hello ${name}`))("berehun");

// example of IIFE to create a new scope

const counter = (function() {
        console.log("new scope")
})
();
console.log(counter)
// console.log(counter); // Output: ReferenceError: counter is not defined
// in the example above, the counter variable is not accessible outside the IIFE, preventing any potential naming conflicts with other variables in the global scope.
// IIFE is also commonly used for module pattern in JavaScript, where you can create private variables and functions that are not accessible from the outside.



// callback function
// A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.
// Callback functions are commonly used in asynchronous programming, event handling, and functional programming.
function fetchData(callback) {
    setTimeout(() => {}, 2000); // Simulating an asynchronous operation
    const data = "Sample Data";
    callback(data);
     
}
fetchData(function(data) {
    console.log("Data received:", data);
}); // Output after 2 seconds: Data received: Sample Data



function sayhello(name,callback){
    console.log(`Hello ${name} `);
    callback();
}
sayhello("Surafel",function(){
    console.log("this callback function executed after sayhello function")
    sayhello("",function(){
        console.log("this is second callback function")

    })
})
// Output: Hello Surafel
// this callback function executed after sayhello function
// this is second callback function
// callback hell example
// In the example above, the sayHello function takes a name and a callback function as arguments. It first logs a greeting message and then calls the callback function. This allows for asynchronous behavior, where the callback function can be executed after the greeting is logged.




const sayhello1 =(callback) =>{
    console.log("hello Surafel")
      callback();

}

sayhello1(()=>{
       console.log("Hello these is the best")
})







// Object creation
const persons ={
    name:"Surafel",
    age:27,
    greet:function(){
           console.log(` Hello my name is ${this.name} and  i'm ${this.age} years old`)
    }
}
persons.greet(); // 




3// method in javascript 
// method is  a function that is a property of an object.
const person3 = {
  name: "Surafel",
  greet: function () {
    console.log("Hello!");
  }
};

person3.greet(); // This is a METHOD call


// the second shor syntax of method is 
const person4 = {
  greet() {
    console.log("Hello!");
  }
};


console.log(person4);



// Array in javascript
// array is is a collection of data
// syntax
const fruits = ["apple", "banana", "orange"];
// how to run arrays
console.log(fruits);
// console.log(fruits.join("-")) //join method in array
// console.log(fruits.length) //length method in array
// console.log(fruits.push("mango")) //push method is array
// console.log(fruits.pop()) //pop method in array
// console.log(fruits.shift()) //shift method in array
// console.log(fruits.unshift("kiwi")) //unshift method in array

// slice
const b = fruits.slice(0,2);
console.log(b) //output : [ 'apple', 'banana' ]



const arr = [1,2,3,4];
const arr1=[5,6,7,8];
// arr.splice(1,2, "a","b"); // arr -> [1,"a","b",4]
console.log(arr);

// concat
const concat_arr =arr.concat(arr1);
console.log(concat_arr)




// 