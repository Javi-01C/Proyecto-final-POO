import { Producto } from "./Producto.js";

export class Taco extends Producto {
    private conVerdura: boolean;

    constructor(id: string, carne: string, conVerdura: boolean) {
        super(id, "Taco", 25, carne);
        this.conVerdura = conVerdura;
    }

    public preparar(): string {
        const extra = this.conVerdura ? "con verdura" : "sin verdura";
        return `Taco de ${this.carne} servido ${extra}.`;
    }
}