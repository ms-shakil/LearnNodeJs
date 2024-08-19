 const http = require("http")
  const port =3000;
  const hostname ='127.0.0.1'

const Myserver = http.createServer((req,res)=>{
         res.end()
})

Myserver.listen(port,hostname)