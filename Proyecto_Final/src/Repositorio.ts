export class Repositorio<T> {
    private elementos: T[];

    constructor() {
        this.elementos = [];
    }

    public guardar(elemento: T): void {
        this.elementos.push(elemento);
    }

    public obtenerTodos(): T[] {
        return this.elementos;
    }
}