const url="https://jsonplaceholder.typicode.com/posts";
const ul=document.getElementById("list_ul")
async function getPosts(){
  try{
    const data = await fetch(url);
    const res= await data.json();
    // res.foreach()
    res.forEach(list =>{
           console.log(list)
           const li = document.createElement("li");
            li.textContent = `${list.userId} ${list.id} ${list.title} ${list.body}`
        ul.appendChild(li)
    })
  }
  catch(err){
     console.log(err)
     const li=document.createElement('li')
     li.textContent =`invalid data`
     li.appendChild(ul)
  }
}
getPosts()