import { Producto } from "./Producto.js";
export class Torta extends Producto {
    partidaALaMitad;
    constructor(id, carne, partidaALaMitad) {
        super(id, "Torta", 60, carne);
        this.partidaALaMitad = partidaALaMitad;
    }
    preparar() {
        const corte = this.partidaALaMitad ? "en dos mitades" : "entera";
        return `Torta de ${this.carne} calentada y servida ${corte}.`;
    }
}
