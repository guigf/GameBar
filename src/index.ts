var jogo_controller = require('./controller/jogo')

const express = require('express')
const app = express();

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log("servidor rodando na porta 8000");
  jogo_controller.
});