export class Producto {
    constructor(nombre,precio) {
        this.nombre=nombre;
        this.precio=precio;
    }

    calcularImpuesto(Porcentaje=0.18){
        return this.precio*Porcentaje;
    
    }

    calcularImpuestoFinal(Porcentaje=0.18){
        return this.precio +this.calcularImpuesto(Porcentaje)
    }
}