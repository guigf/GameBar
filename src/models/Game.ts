import { Jogador } from "./Jogador";
import { Bar } from "./Bar";
var _ = require('lodash');

export class Game {
    private jogadores: Array<Jogador>;

    constructor(jogadores: Array<Jogador>) {
        this.jogadores = jogadores;
    }

    encontrarJogadorPorBar(jogador: Jogador): Array<Jogador> {
        return this.jogadores.filter(jog => jog.bar.nome === jogador.bar.nome && jog.nome !== jogador.nome);
    }

    encontrarJogadorPorJogo(jogador: Jogador) {
        return this.jogadores.filter(jog => jog.jogo === jogador.jogo && jog.nome !== jogador.nome);
    }
}