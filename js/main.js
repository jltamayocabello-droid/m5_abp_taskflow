

import { GestorTareas } from "./classes/GestorTareas.js";

const gestor = new GestorTareas();
gestor.agregarTarea("Aprender JavaScript", "Repasar módulos y clases ES6");
gestor.agregarTarea("Comprar café", "Necesario para programar");
console.log("Estado actual del gestor:", gestor.tareas);


