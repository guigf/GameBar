import { Bar } from "./Bar";

export class Jogador {

    public nome: string;
    public bar: Bar;
    public jogo: string;

    constructor(nome: string, bar: Bar, jogo: string) {
        this.nome = nome;
        this.bar = bar;
        this.jogo = jogo;
    }
}