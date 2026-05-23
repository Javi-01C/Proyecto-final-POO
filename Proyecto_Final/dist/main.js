import { Menu } from "./Menu.js";
const botonIniciar = document.getElementById("btnIniciar");
if (botonIniciar) {
    botonIniciar.onclick = function () {
        const menuTaqueria = new Menu();
        menuTaqueria.iniciar();
    };
}
