const express= require('express')
const app= express()
const path = require('path')
const puerto=3030

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});

