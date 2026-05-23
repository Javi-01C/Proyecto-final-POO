

import { Producto } from "./Producto.js";

export class Orden {
    private id: string;
    private productos: Producto[];

    constructor(id: string) {
        this.id = id;
        this.productos = [];
    }
    public getId():string{
        return this.id;
    }

    public agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    public calcularTotal(): number {
        let total = 0;
        
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].getPrecio();
        }
        
        return total;
    }
}