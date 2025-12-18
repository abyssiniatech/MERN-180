
const datas=[
    {name:"surafel",age:23},
    {name:"Abel",age:33},
    {name:"Yared",age:65},
    {name:"Nahom",age:45},
    {name:"Aster",age:20},
    {name:"habesha",age:63}
]



const promises= new Promise((resolve,reject)=>{
    const data =true;
    if(data==true){
        console.log("Resolve",resolve)
    }
    else{
        console.log("reject",reject)
    }
})

promises
.then(result=>console.log(`${result} yes`))
.catch(error =>console.log(`error ${error}`))
.finally(console.log("this is the final code"))


// the second project
// fetch data


const list = document.getElementById("list");
console.log(list)
const promise = new Promise((resolve,reject)=>{
  if(datas.length >0){
    resolve(datas)
  }
  else{
    reject("reject")
  }
})

promise
.then((data)=>{
    console.log(data.forEach((list)=>{
        const newList = document.createElement('li')
        newList.textContent =`Name:${list.name}  Age: ${list.age}`
        list.appendChild(newList)
    }))
})
.catch((error)=>{
    console.log(error)
})
.finally(() =>{
    console.log("this is the final code ")
})
