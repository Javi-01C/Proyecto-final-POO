export class Producto {
    id;
    nombre;
    precioBase;
    carne;
    constructor(id, nombre, precioBase, carne) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.carne = carne;
    }
    getPrecio() {
        return this.precioBase;
    }
}
