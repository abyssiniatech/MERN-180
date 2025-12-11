
// // // const info ={
// // //   name: "Surafel",
// // //   email: "suraf@gmail.com",
// // //   move : function(){
// // //     console.log("Welocome to my  channel  " + this.name)
// // //   }
// // // }
// // // info.move()


// // // // normal function
// // // function Main(){
// // //     console.log(this)
// // // }
// // // Main()

// // // this keyword in the arrow function 
// // const info ={
// //   name: "Surafel",
// //   email: "suraf@gmail.com",
// //   move : ()=>{
// //     console.log(this.name)
// //   }
// // }
// // info.move()


// // // addevent listener in this keyword
// // // const btn=document.getElementById("btn");
// // //  btn.addEventListener("click", function (){
// // //   console.log(this)
// // // })



// // function  humans(name, email){
// //   this.name = name;
// //   this.email = email;

// // }
// // const p1=new humans("surafel", "sura@gmail.com")
// // console.log(p1)




// const users = [
//   {id:1, name:'A', age:30},
//   {id:2, name:'B', age:25},
//   {id:3, name:'C', age:40},
//   {id:4, name:'D', age:18},
//   {id:5, name:'E', age:12},
//   {id:6, name:'F', age:20},
//   {id:7, name:'G', age:100},
// ];


// const  young =users.filter(list =>list.age>25)
// console.log(young);




// function square(a){

//   console.log(a)
// }
// square("Hi")



// // sqr
// const squra =a => a+a
// console.log(squra(10))



// // randome number
// function glob(){
//       setTimeout(()=>{
//           console.log(Math.floor(Math.random() *10)+1)
//       },2000)
// }
// glob()




// // default parameter
// function multiply(a=12,b){
//   // debugger
//   return a*b
// }
// let result =multiply(12)
// console.log(result)






// // spread operator  in function 
// function greet(){
  
//   return ["Hello"];
// }


// function response(){
  
//   return [" suarfel"];
// }
//  const  sprd = [...greet(), ...response()]
//  console.log(sprd)



console.log("welcome to ...")