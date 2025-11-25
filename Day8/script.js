// day  8 
// topics
// Day 8 — 08/03/2018 E.C

// Topic: Advanced JavaScript Concepts To-Do List:
//  Learn ES6+ features: let/const, arrow functions, template literals
//  Understand destructuring, spread/rest operators, default parameters
//  Study asynchronous JavaScript: promises, async/await Mini Project: Rewrite a simple CRUD app frontend using ES6+ features Resources:
//  MDN JavaScript Guide
// Day 8 — 08/03/2018 E.C
// Topic: Advanced JavaScript Concepts To-Do List:
//  Learn ES6+ features: let/const, arrow functions, template literals
//  Understand destructuring, spread/rest operators, default parameters
//  Study asynchronous JavaScript: promises, async/await Mini Project: Rewrite a simple CRUD app frontend using ES6+ features Resources:
//  MDN JavaScript



// Guide
// let us see one by one


// 1. let/const
// what is let and const?
// let and const are block-scoped variables introduced in ES6.
// let allows you to declare variables that can be reassigned, while const is used for variables that should not be reassigned after their initial assignment.
// let x = 10; // can be reassigned
// const y = 20; // cannot be reassigned
// const z = 30;
// const w = 50;
// console.log(x, y, z,w)

// let car and const are block-scoped, meaning they are only accessible within the block they are defined in.
// 1 var  is function-scoped, which can lead to unexpected behavior in loops or conditional statements.
// example   


console.log("var example")
    function testVar() {
        for(var i=0; i<5; i++){
      console.log(i);
} 
        console.log(i); // Accessible here due to 
    }
    testVar(); // Outputs



    // let  is block-scoped
    // in let variable is not accessible outside the block
    // in let variable is accessible only inside the block
    // you can reassign the value of let variable
    // example
    console.log("let example")
let num =12;
num=34
console.log(num)
        function testLet() {
            for(let j=0; j<5; j++){
            console.log(j);
        }
        // console.log(j); // Error: j is not defined
         console.log("Outside the loop j is not accessible")
    }
        testLet(); // Outputs 0 to 4

        console.log('const exercise ')

        // const is also block-scoped
        // in const variable is not accessible outside the block
        // in const variable is accessible only inside the block
        // you cannot reassign the value of const variable
        // const vs let  is that const cannot be reassigned but let can be reassigned
        // example 
        const pi = 3.14;
        // pi=3.13456;
        console.log(pi); // Error: Assignment to constant variable.



        function testConst() {
               for(let i=0;i<5; i++){
            const a = i * 2;
            console.log(a);
               }
        }
        testConst(); // Outputs 0, 2, 4, 6, 8
        console.log("the value of a is not accessible outside ")


// Summary:
// - Use let for variables that may change and const for variables that should remain constant.
// - Both let and const are block-scoped, providing better control over variable scope compared to var.
// - Prefer const by default, and only use let when you need to reassign a variable.
// - This helps in maintaining immutability and reducing unintended side effects in your code.
// Next topic  arrow functions
// 2. Arrow Functions
// Arrow functions provide a concise syntax for writing functions in JavaScript. They also lexically bind the this value, making them particularly useful in certain contexts, such as callbacks and methods within classes.


// Example of arrow function:
const add = (a, b) => a + b;
console.log(add(5, 3)); // Outputs:


// example two  =
const info =()=>{
    setTimeout(() =>{
        console.log("hello world after two seconds");
    },2000)
}
info();

console.log("")


// two parameters  in arrow function
const sums =(a,b) =>   a+b;

console.log(sums(12,34))


// arrow function with one parameter

const sayGreet=name => `hello ${name}`;
console.log(sayGreet("Surafel"))



// 3 template litrals
// Template Literals is use backticks instead of quotes
// examples
const name="surafel";
const email=`sura@gmail.com`
console.log(name)
console.log(email)


// Distructuring in array
// Distructuring is 

// example 
const Person={
    name:"surafel",
    age:28,
    Address:"ethiopia"
};
const { name: personName, age, Address } = Person;
console.log(personName, age, Address);



// spread operators  in arrays
const num1=[1,2,3,4,5,6];
const num2=[7,8,9,10,11,12];
const result = ["the spread operator ", ...num1, ...num2];
console.log(result)

// spread operators  in objects
const student1={
    name:"Abel",
    departement:"computer science",

}
const student2={
    name:"Aster",
     departement:"Biology"
}
const student3={
      name: "Yared",
      department:"Economics"
}
const merges={...student1,...student2,...student3};
console.log(merges);


// rest operators is 
function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3, 4));


// default parametrs is used  to set default value if no argumets are set
function sayHello(name="Guest"){
    return `Hello, ${name}!`
}
console.log(sayHello()); //have not argumets are  these time  run default parametrs
console.log(sayHello("Surafel")) //have arguments



//  Async js 
// Promise in javascript 
const promise =new Promise((resolve,reject) => {
    let success= true;
    setTimeout(() => {
      if(success){
         resolve("data is loaded")
      }
       else{
            reject('Error!');
       }
    },2000)
})

// promise.then(sayHello,sayHello)
promise.then(()=>{
       console.log("data is loaded")
})
.catch(err=>console.log(err))
.finally(() => console.log("Promise settled"));

// the second promise example
const promise2 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data loaded!");
  } else {
    reject("Error!");
  }
});

promise2
  .then(result => console.log(result))
  .catch(err => console.log(err));



// async awit in javascript
let url = "https://jsonplaceholder.typicode.com/posts";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

async function getData() {
    const data = await fetchData(url);

      data.map((dat) => {
         console.log(dat)
      })
}

getData();




