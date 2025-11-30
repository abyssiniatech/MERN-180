const http=require("http");
// create server
const server=http.createServer((req,res)=>{
  res.statusCode=200;
      res.end("Hello the server is working fine.\n");
})


// start server
const PORT =5000;
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`);
})