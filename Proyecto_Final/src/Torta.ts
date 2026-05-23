

import { Producto } from "./Producto.js";

export class Torta extends Producto {
    private partidaALaMitad: boolean;

    constructor(id: string, carne: string, partidaALaMitad: boolean) {
        super(id, "Torta", 60, carne);
        this.partidaALaMitad = partidaALaMitad;
    }

    public preparar(): string {
        const corte = this.partidaALaMitad ? "en dos mitades" : "entera";
        return `Torta de ${this.carne} calentada y servida ${corte}.`;
    }
}