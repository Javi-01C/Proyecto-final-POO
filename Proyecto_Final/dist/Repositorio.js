export class Repositorio {
    elementos;
    constructor() {
        this.elementos = [];
    }
    guardar(elemento) {
        this.elementos.push(elemento);
    }
    obtenerTodos() {
        return this.elementos;
    }
}
