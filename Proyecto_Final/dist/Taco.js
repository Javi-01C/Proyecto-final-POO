import { Producto } from "./Producto.js";
export class Taco extends Producto {
    conVerdura;
    constructor(id, carne, conVerdura) {
        super(id, "Taco", 25, carne);
        this.conVerdura = conVerdura;
    }
    preparar() {
        const extra = this.conVerdura ? "con verdura" : "sin verdura";
        return `Taco de ${this.carne} servido ${extra}.`;
    }
}
