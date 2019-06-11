// var jogo_controller = require('./controller/jogo')

// import express from 'express';
// const app = express();

// app.get('/', (req: any, res: any) => {
//   return res.send('Hello World!');
// });

// app.listen(8000, () => {
//   console.log("servidor rodando na porta 8000");
// });

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log('Servidor rodando na porta ' + port);
});

