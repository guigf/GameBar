// var jogo_controller = require('./controller/jogo')

// import express from 'express';
// const app = express();

// app.get('/', (req: any, res: any) => {
//   return res.send('Hello World!');
// });

// app.listen(8000, () => {
//   console.log("servidor rodando na porta 8000");
// });

const express = require('express');
const routes = require('./routes/routes.ts');


const app = express();
const port = process.env.PORT || 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log('Servidor rodando na porta ' + port);
});

