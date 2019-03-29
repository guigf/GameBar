import { Bar } from "./Bar";

export class Jogador {

    public nome: string;
    public bar: Bar;

    constructor(nome: string, bar: Bar) {
        this.nome = nome;
        this.bar = bar;
    }
}