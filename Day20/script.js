// // selectors
// const con=document.getElementById("con");
// const first_par= document.getElementById("first-par");
// const  btn =document.getElementById("btn");


// // function 

// btn.addEventListener("click", () => {
//      console.log("this the best programming academy");
//     //  con.style.display="none";
//      con.style.backgroundColor="green";
//      con.style.color="white";
// })




// increament projects
// create selectors
const div=document.getElementById("div");
const header=document.getElementById("header");
const inc=document.getElementById("inc");
const dec=document.getElementById("dec");
const res=document.getElementById("res");
const result = document.getElementById("result");
console.log(result);

// exuct the funtion 

// decremnet button logic
let resEl=0;
dec.addEventListener("click", ()=>{
    resEl--;
  result.textContent=resEl
      
})

// reset logic 
res.addEventListener("click", ()=>{
    resEl=0;
    result.textContent=resEl;
})

// increment logic
inc.addEventListener("click",()=>{
      resEl++;
      result.textContent =resEl
})


//   dom is document object model in js 
// dom is 

