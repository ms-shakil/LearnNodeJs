const fs =require('fs')
// if writeFile multiple used it will overwrite the file
fs.writeFile("data.txt","this is my laptop",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("SuccessFul")
    }
})

// add data 
fs.appendFile("data.txt","this is my Mobile PHone",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("SuccessFul")
    }
})

fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// unlink use for delete file
fs.unlink("data.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})