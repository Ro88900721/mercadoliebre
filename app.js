const express= require('express')
const controlador= require ('.controladores/controlador')
const app= express()
const path = require('path')
const puerto=3030

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/',controlador.index);
app.get('/register', controlador.register)
app.get('/login', controlador.login);

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});

