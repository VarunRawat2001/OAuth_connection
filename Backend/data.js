
const express=require('express')
const bodypaser= require('body-parser')
const cors = require('cors')

const app=express()
app.use(cors())
app.use(bodypaser.json())
app.use(express.json())

app.listen(8081,()=>{
    console.log("server is running")
});



app.get('/',(req,res)=>
{
    var a={
        "football": 'Yes',
        "reading": 'true'       
    }
    res.send(a)
})



