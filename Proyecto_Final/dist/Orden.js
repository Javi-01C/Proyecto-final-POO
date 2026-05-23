export class Orden {
    id;
    productos;
    constructor(id) {
        this.id = id;
        this.productos = [];
    }
    getId() {
        return this.id;
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].getPrecio();
        }
        return total;
    }
}
