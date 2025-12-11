// // identify the given number is either even or odd 

// function numstat(num){
//       if(num%2==0){
//         console.log(`the given number is even and the given number is =  ${num}`);
//       }
//       else{
//         console.log(`the given number is odd  and also the number is =  ${num}`)
//       }
// }
// let result=numstat(11)
// console.log(result)


// write the javascript code when get input the keyboard and identify the number is even or odd
// let num=prompt("enter the number")
// function isEven(){
//      return num%2==0 ? "the given number is even" : "the given number is odd";
// }
// const val=isEven()
// console.log(val)



// project three calculate the grade report 
// let result = Number(prompt("enter your result"));
// const Grade = () => {
//     return result >= 90 ? "A"
//          : result >= 80 ? "B"
//          : result >= 70 ? "C"
//          : result >= 40 ? "D"
//         : result >= 0 ? "F"
//          : "Invalid input";
         
// }
// console.log(Grade());



// the second way for grade report switch()
// let result=78
//      switch (result) {
//         case result>=90:
//            console.log( "your grade is =A") 
//             break;

//              case result>=70:
//            console.log( "your grade is =B") 
//             break;

//              case result>=50:
//            console.log( "your grade is =C") 
//             break;

//              case result>=40:
//            console.log( "your grade is =D") 
//             break;
     
//              case result>=0 && result <40 :
//            console.log( "your grade is =A") 
//             break;

//         default:
//             console.log( "invalid inputs")
//          break;
//      }



// the third way 
// let result=prompt("enter your reasult")
// function finalGrade(){
//    if(result >=90){
//        console.log("A")
//    }
//    else if(result >=70){
//     console.log("B")
//    }
//    else if(result >=50){
//     console.log("C")
//    }
//    else if(result>=40){
//     console.log("D")
//    }
//    else if(result>0){
//     console.log("F")
//    }
//    else{
//     console.log("invalid input")
//    }
// }   
// finalGrade()


//  object  declaration
// const info ={
//     name: "surafel",
//     email:"surafel@gmail.com",
//     greet(){
//          console.log(`Hello ${this.name} welcome to my channel`)
//     }

// }
// console.log(info.greet())




// revising array method
// 1 filter method
let numbers=[1,2,3,4,5,6];
// let num=numbers.filter(sum  => sum%2==0)
// console.log(num)

// reducer method
// let num=numbers.reduce((sum,result) =>{
//     return sum+=result;
// } ,0)
// console.log(num)



// map method()


// let num=numbers.map(val =>val)
// console.log(num);



// shoping cart project 
// const cart = [
//   { name: "Phone", price: 500 },
//   { name: "Headset", price: 100 },
//   { name: "Charger", price: 50 },
// ];

// const total = cart.reduce((sum, item) => sum + item.price, 0);

// console.log("Total:", total);



// Word Counter project
const text = "I love JavaScript because JavaScript is powerful";

const words = text.toLowerCase().split(" ");

const count = words.reduce((obj, word) => {
  obj[word] = (obj[word] || 0) + 1;
  return obj;
}, {});

console.log(count);
