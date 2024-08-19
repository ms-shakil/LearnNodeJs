const http = require(`http`)
const port =3000
const fs = require(`fs`)
const host =`127.0.0.1`

const myserver = http.createServer((req,res)=>{
    const HandelReadFile =(FileLocation, StatusCode)=>{
        fs.readFile(FileLocation,(err,data)=>{
            res.writeHead(StatusCode,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
          })
    }
      if(req.url ==="/" ){
        HandelReadFile("index.html",200)
      } else if(req.url ==="/about"){
        HandelReadFile("about.html",200)
      }
      else if(req.url ==="/contract"){
        HandelReadFile("contract.html",200)
      }
})

myserver.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port} `)
})