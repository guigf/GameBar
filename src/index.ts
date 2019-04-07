import { Jogador } from "./models/Jogador";
import { Bar } from "./models/Bar";
import { Game } from "./models/Game";

const express = require('express')
const app = express();

app.get('/', (req: any, res: any) => {
  const bar = new Bar('Bar do Zé');
  const jogador1 = new Jogador('Joao Teste', bar, 'Jogo Teste');
  const jogador2 = new Jogador('Marcio Teste', bar, 'Jogo Teste');
  const jogadores = new Array<Jogador>();
  jogadores.push(jogador1);
  jogadores.push(jogador2);
  const game = new Game(jogadores);


  res.send('Hello World!')
});

app.listen(8000, () => {
  const bar = new Bar('Bar do Zé');
  const jogador1 = new Jogador('Joao Teste', bar, 'Jogo Teste');
  const jogador2 = new Jogador('Marcio Teste', bar, 'Jogo Teste');
  const jogadores = new Array<Jogador>();
  jogadores.push(jogador1);
  jogadores.push(jogador2);
  const game = new Game(jogadores);
  console.log(game);
  console.log("test");
});