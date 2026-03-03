// archivo: classes/producto.js
export class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método para calcular el impuesto
    calcularImpuesto(porcentaje = 0.18){
        return this.precio * porcentaje;
    }

    // Método para calcular el precio final con impuesto
    calcularImpuestoFinal(porcentaje = 0.18){
        return this.precio + this.calcularImpuesto(porcentaje);
    }
}