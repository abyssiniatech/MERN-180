const datas =`https://jsonplaceholder.typicode.com/users`
async function getData(){
    try{
     const data=await fetch(datas)
     const res= await data.json()
       res.forEach((list)=>{
         console.log(list.name)
       })
     console.log(res)
    }
    catch(err){
        console.log(err)
    }
}
getData()