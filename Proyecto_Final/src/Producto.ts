

export abstract class Producto {
    protected id: string;
    protected nombre: string;
    protected precioBase: number;
    protected carne: string;

    constructor(id: string, nombre: string, precioBase: number, carne: string) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.carne = carne;
    }

    public getPrecio(): number {
        return this.precioBase;
    }

    public abstract preparar(): string;
}