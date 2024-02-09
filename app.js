const express = require('express');
const http = require('http');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Iniciando Proyecto')
  })

app.listen(port,()=>{

    console.log("Iniciando el servidor en el puerto 3000 accede usando localhost:3000 en el navegador");

});