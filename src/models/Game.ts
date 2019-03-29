import { Jogador } from "./Jogador";
import { Bar } from "./Bar";

export class Game {
    barNovo = new Bar("Bar2z");
    constructor() {
    }

    encontrarJogador(jogador: Jogador, bar: Bar) {
        return new Jogador("Jose", this.barNovo );
    }
}