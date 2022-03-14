
const express=require('express')
const bodypaser= require('body-parser')
const cors = require('cors')

const app=express()
app.use(cors())
app.use(bodypaser.json())
app.use(express.json())

app.listen(8080,()=>{
    console.log("server is running")
});


app.post('/create',(req,res)=>
{
    console.log(req.body);
    let cliientId= req.body.cliientId;
    let scope= req.body.scope;
    let url=req.body.url;
    let responseType=req.body.responseType;
})
