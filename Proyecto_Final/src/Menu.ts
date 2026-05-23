

import { Taco } from "./Taco.js";
import { Torta } from "./Torta.js";
import { Orden } from "./Orden.js";

export class Menu {
    private ordenActual: Orden;
    private contadorOrdenes: number;

    constructor() {
        this.contadorOrdenes = 1;
        this.ordenActual = new Orden("Orden-1");
    }

    public iniciar(): void {
        let continuar = true;
        
        while(continuar) {
            const opcion = this.mostrarOpcionesYLeerEntrada();
            if (opcion === null) {
                break;
            }
            continuar = this.procesarOpcion(opcion);
        }
    }

    private mostrarOpcionesYLeerEntrada(): string | null {
        const mensaje = "    MENÚ TAQUERÍA   \n" +
                        "1. Agregar Taco ($25)\n" +
                        "2. Agregar Torta ($60)\n" +
                        "3. Pagar Orden\n" +
                        "4. Salir\n\n" +
                        "Elige una opción:";
        return prompt(mensaje);
    }

    private procesarOpcion(opcion: string): boolean {
        if (opcion === "1") {
            const carneTaco = prompt("¿De qué carne quieres tu taco? (Asada, Chorizo, Tripa)");
            if (carneTaco === "Asada" || carneTaco === "Chorizo" || carneTaco === "Tripa") {
                const nuevoTaco = new Taco("T1", carneTaco, true);
                this.ordenActual.agregarProducto(nuevoTaco);
                alert(nuevoTaco.preparar());
            } else {
                alert("Sabor no válido.");
            }
            return true;
        } 
        else if (opcion === "2") {
            const carneTorta = prompt("¿De qué carne quieres tu torta? (Asada, Chorizo, Tripa)");
            if (carneTorta === "Asada" || carneTorta === "Chorizo" || carneTorta === "Tripa") {
                const nuevaTorta = new Torta("TO1", carneTorta, false);
                this.ordenActual.agregarProducto(nuevaTorta);
                alert(nuevaTorta.preparar());
            } else {
                alert("Sabor no válido.");
            }
            return true;
        } 
        else if (opcion === "3") {
            const total = this.ordenActual.calcularTotal();
            alert("Total a pagar de la "+ this.ordenActual.getId() + "= $" +total);
            
            this.contadorOrdenes++;
            this.ordenActual = new Orden("Orden-" + this.contadorOrdenes.toString()); //borra la orden anterior
            return true; 
        } 
        else if (opcion === "4") {
            alert("Saliendo del sistema...");
            return false; 
        } 
        else {
            alert("Opción no válida.");
            return true;
        }
    }
}