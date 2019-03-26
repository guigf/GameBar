import { Jogador } from "./models/Jogador";
import { Bar } from "./models/Bar";
import { Game } from "./models/Game";

test('Encontrar Jogador', () => {
  const jogador = new Jogador("Pedro");
  const bar = new Bar("Bar2Ze");
  const game = new Game();
    
  const jogadorEncontrado = game.encontrarJogador(jogador, bar);

  // expect(typeof jogadorEncontrado.toBe("Jogador"));
  expect(jogadorEncontrado.nome).toBe("Jose");
  // expect(jogadorEncontrado.bar).toBe(jogador.bar);
});