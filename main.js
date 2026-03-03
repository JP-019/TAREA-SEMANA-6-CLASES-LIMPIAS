import { Persona } from "./classes/persona.js";
import { Producto } from "./classes/producto.js";
import { Cuenta } from "./classes/cuenta.js";



console.log("Clase Persona:");
const persona = new Persona("Julio", 23);
console.log(persona.saludar());


console.log("Clase Producto:");
const producto = new Producto("Laptop", 1000);
console.log("Precio final con impuesto:", producto.calcularImpuestoFinal(0.25));


console.log("Clase Cuenta:");
const cuenta = new Cuenta("Julio", 500);
cuenta.depositar(200);
cuenta.retirar(100);
console.log("Saldo actual:", cuenta.obtenerSaldo());
