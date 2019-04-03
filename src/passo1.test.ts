import { Jogador } from "./models/Jogador";
import { Bar } from "./models/Bar";
import { Game } from "./models/Game";

test('Encontrar Jogador por Jogo', () => {
  
  const bar = new Bar("Bar2Ze");
  const jogador = new Jogador("Pedro", bar, "Ping-Pong");
  const jogador2 = new Jogador("Jose", bar, "Sinuca");
  const jogador3 = new Jogador("Joao", bar, "Ping-Pong");
  const jogador4 = new Jogador("Paulo", bar, "Truco");
  const game = new Game([jogador, jogador2, jogador3, jogador4]);
    
  const jogadorEncontrado = game.encontrarJogadorPorJogo(jogador)[0];

  expect(jogadorEncontrado.nome).toBe("Joao");
});

test('Encontrar Jogador por Bar', () => {
  
  const bar = new Bar("Bar1");
  const bar2 = new Bar("Bar2");
  const bar3 = new Bar("Bar3");
  const jogador = new Jogador("Pedro", bar, "Ping-Pong");
  const jogador2 = new Jogador("Jose", bar2, "Sinuca");
  const jogador3 = new Jogador("Joao", bar3, "Ping-Pong");
  const jogador4 = new Jogador("Paulo", bar, "Truco");
  const game = new Game([jogador, jogador2, jogador3, jogador4]);
    
  const jogadorEncontrado = game.encontrarJogadorPorBar(jogador)[0];

  expect(jogadorEncontrado.nome).toBe("Paulo");
});