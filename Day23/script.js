// // let hor=document.getElementById("hor");
// // let min=document.getElementById("min");
// // let sec=document.getElementById("sec");


// // function Time(){
// //    setInterval(()=>{
// //          hor=new Date().getHours();
// //          hor.innerHTML =hor
// //          min=new Date().getMinutes();
// //          sec=new Date().getSeconds();
       
// //    },1000)
// // }
// // Time()





// let hor = document.getElementById("hor");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

// function Time() {
//   setInterval(() => {
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();

//     hor.innerHTML = h < 10 ? "0" + h : h;
//     min.innerHTML = m < 10 ? "0" + m : m;
//     sec.innerHTML = s < 10 ? "0" + s : s;
//   }, 1000);git
// }

// Time();







//  dom manipulation about the next js

// selectors and select dom elements 

// const ul = document.querySelector("ul");
// const h1=document.getElementById("h1")
// h1.style.color="gold"
// h1.textContent ="welcome to dom"
// document.title="Dom manipulation"
// h1.style.borderBottom="5px solid red"
// // console.log(document.title);
// // console.log(document.body)
// // console.log(document.head)


// const liItems = ul.querySelectorAll("li");
// for (let i = 0; i < liItems.length; i++) {
//   liItems[i].style.backgroundColor="gray"
//   liItems[i].style.borderBottom="2px solid pink"
// }
// liItems[0].style.color="green"
// liItems[1].style.color="yellow"
// liItems[2].style.color="red"




// queryselector()
// const listitem=document.querySelector(".list");
// console.log(listitem.children[0])



// dom  is a tree like structure
// const title=document.querySelectorAll("ul")
// title.forEach(function(item){
//     console.log(item)
// })
// console.log(title)


// parent element
const ul=document.querySelector("ul");
// console.log(ul.parentNode.parentNode.parentNode);

// console.log(ul.previousSibling);


// create elements in js 
// const con=document.querySelector("#con");
// const newDiv = document.createElement("div");
// const newPar = document.createElement("p")
// newPar.textContent ="these is new paragraph text"
// newDiv.appendChild(newPar)
// con.appendChild(newDiv); 
// newPar.setAttribute("id","newpar")
// console.log(newDiv)
console.log(newPar)











