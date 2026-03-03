export class Persona {
    constructor(nombre,edad) {
        this.nombre=nombre;
        this.edad=edad;

    }
    saludar(){
        return `Hola soy ${this.nombre} y esta es mi edad ${this.edad}`
    }
}