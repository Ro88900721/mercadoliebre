const express= require('express')
const app= express()
const path = require('path')
const puerto=3030

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.listen(puerto, ()=>{
    console.log ("servidor escuchando")
})