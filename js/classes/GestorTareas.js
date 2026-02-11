
import { Tarea } from "./Tarea.js";

export class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    //Método para agregar una tarea
    agregarTarea(titulo, descripcion) {
        // Crear una nueva tarea
        const nuevaTarea = new Tarea(titulo, descripcion);

        // Guardar una nueva tarea
        this.tareas.push(nuevaTarea);

        //Retornamos la tarea recién creada
        return nuevaTarea;
    }


}